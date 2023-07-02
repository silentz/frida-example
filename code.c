#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

void print_statement_01() {
    printf("%s\n", "hello!");
}

void print_statement_02() {
    printf("%s\n", "world!");
}

void print_pid() {
    int pid = getpid();
    printf("pid: %d\n", pid);
}

void run() {
    print_statement_01();
    print_statement_02();
    print_pid();
}

int main() {
    while (1) {
        run();
        sleep(1);
    }
}
