
// fetch this information from the binary
const targetFunctionAddr = 0x0000117f;  // funciton address
const targetReturnType = 'void';        // function return type (void, int, float, double, ...)
const targetParams = [];                // function param types (void, int, float, double, ...)

// this is your debugged program name
const moduleName = "prog";

// search for base address
const moduleInstance = Process.getModuleByName(moduleName);
const moduleBaseAddr = Number(moduleInstance.base);

// making function
const functionInterceptAddr = targetFunctionAddr + moduleBaseAddr;
const hexInterceptAddr = "0x" + functionInterceptAddr.toString(16);
const interceptPointer = new NativePointer(hexInterceptAddr);
console.log("Runtime addr:", interceptPointer);

// making native function replacement
const cmodule = new CModule(`
#include <stdio.h>

void native_replacement() {
    printf("updated world!\n");
}
`)

// JS-handler for native function replacement
function _replacement() {
    const nativeFunc = new NativeFunction(
        cmodule.native_replacement,
        targetReturnType,
        targetParams,
    );
    nativeFunc();
}

// launching interceptor
Interceptor.replace(interceptPointer,
    new NativeCallback(_replacement, targetReturnType, targetParams));
