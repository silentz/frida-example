# Frida C-function intercept example

1. Complile `code.c` using `make`:
```bash
make
```

2. Run program:
```bash
./prog
```

3. Install frida (better in venv):
```bash
pip install frida-tools
```

4. Program will print you it's PID. Launch frida with this PID:
```bash
sudo frida -p <PID> -l intercept.js
```
