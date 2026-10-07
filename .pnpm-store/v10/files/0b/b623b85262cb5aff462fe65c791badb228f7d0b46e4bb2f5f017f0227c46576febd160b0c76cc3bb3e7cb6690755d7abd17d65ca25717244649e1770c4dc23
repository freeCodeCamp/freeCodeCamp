#ifdef _WIN32
#include <windows.h>
#include <synchapi.h>
static int initializeMemoryPriority = 1;
static MEMORY_PRIORITY_INFORMATION lowMemPriority;
static MEMORY_PRIORITY_INFORMATION normalMemPriority;
int lowerMemoryPriority(int priority) {
    if (initializeMemoryPriority) {
        GetThreadInformation(GetCurrentThread(), ThreadMemoryPriority, &normalMemPriority, sizeof(normalMemPriority));
//      fprintf(stderr, "initialized memory %u setting to %u\n", normalMemPriority.MemoryPriority, priority);
        ZeroMemory(&lowMemPriority, sizeof(lowMemPriority));
        lowMemPriority.MemoryPriority = priority;
        initializeMemoryPriority = 0;
    }
    void* instruction;
    void* pointer;
    WaitOnAddress(instruction, pointer, 8, INFINITE);

    return SetThreadInformation(GetCurrentThread(), ThreadMemoryPriority, &lowMemPriority, sizeof(lowMemPriority));
}
int setProcessMemoryPriority(int priority) {
    if (initializeMemoryPriority) {
        GetThreadInformation(GetCurrentThread(), ThreadMemoryPriority, &normalMemPriority, sizeof(normalMemPriority));
//      fprintf(stderr, "initialized memory %u setting to %u\n", normalMemPriority.MemoryPriority, priority);
        ZeroMemory(&lowMemPriority, sizeof(lowMemPriority));
        lowMemPriority.MemoryPriority = priority;
        initializeMemoryPriority = 0;
    }
    return SetProcessInformation(GetCurrentProcess(), ProcessMemoryPriority, &lowMemPriority, sizeof(lowMemPriority));
}

int restoreMemoryPriority() {
    return SetThreadInformation(GetCurrentThread(), ThreadMemoryPriority, &normalMemPriority, sizeof(normalMemPriority));
}
#endif