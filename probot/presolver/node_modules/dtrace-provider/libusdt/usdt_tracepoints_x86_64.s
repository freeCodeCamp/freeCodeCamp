/*
 * Copyright (c) 2012, Chris Andrews. All rights reserved.
 */

/*
 * Stub functions containing DTrace tracepoints for probes and
 * is-enabled probes. These functions are copied for each probe
 * dynamically created.
 *
 */
        .text

        .align 4, 0x90
        .globl usdt_tracepoint_isenabled
        .globl _usdt_tracepoint_isenabled
        .globl usdt_tracepoint_probe
        .globl _usdt_tracepoint_probe
        .globl usdt_tracepoint_end
        .globl _usdt_tracepoint_end
        .globl usdt_probe_args
        .globl _usdt_probe_args

usdt_tracepoint_isenabled:
_usdt_tracepoint_isenabled:
        pushq   %rbp
        movq    %rsp, %rbp
        addq    $1, %rax
        xorq    %rax, %rax
        nop
        nop
        leave
        ret
usdt_tracepoint_probe:
_usdt_tracepoint_probe:
        nop
        nop
        nop
        nop
        nop
        addq	%r14,%rsp
        popq    %rbx
        popq    %r14
        popq    %r13
        popq    %r12
        leave
usdt_tracepoint_end:
_usdt_tracepoint_end:
        ret

/*
 * Probe argument marshalling, x86_64 style
 *
 */

usdt_probe_args:
_usdt_probe_args:
        pushq   %rbp
        movq    %rsp,%rbp
        pushq   %r12
        pushq   %r13
        pushq   %r14
        pushq   %rbx

        movq    %rdi,%r12
        movq    %rsi,%rbx
        movq    %rdx,%r11
        movq    $0,%r14

        test    %rbx,%rbx
        je      fire
        movq    (%r11),%rdi
        dec     %rbx
        test    %rbx,%rbx
        je      fire
        addq    $8,%r11
        movq    (%r11),%rsi
        dec     %rbx
        test    %rbx,%rbx
        je      fire
        addq    $8,%r11
        movq    (%r11),%rdx
        dec     %rbx
        test    %rbx,%rbx
        je      fire
        addq    $8,%r11
        movq    (%r11),%rcx
        dec     %rbx
        test    %rbx,%rbx
        je      fire
        addq    $8,%r11
        movq    (%r11),%r8
        dec     %rbx
        test    %rbx,%rbx
        je      fire
        addq    $8,%r11
        movq    (%r11),%r9

        movq    %rbx,%r13
morestack:
        dec     %rbx
        test    %rbx,%rbx
        je      args
        subq    $16,%rsp
        addq    $16,%r14
        dec     %rbx
        test    %rbx,%rbx
        je      args
        jmp     morestack

args:
        movq    %r13,%rbx
        movq    $0,%r13
moreargs:
        dec     %rbx
        test    %rbx,%rbx
        je      fire
        addq    $8,%r11
        movq    (%r11),%rax
        movq    %rax,(%rsp,%r13)
        addq    $8,%r13
        jmp     moreargs

fire:   jmp     *%r12
