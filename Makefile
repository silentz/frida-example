SHELL := /bin/bash
.PHONY: build all

build:
	gcc code.c -o prog

all: build
