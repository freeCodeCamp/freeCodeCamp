
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

describe('python-worker-handler', () => {
    let mockWorker: any;
    let WorkerSpy: any;
    let onPythonWorkerEvent: any;
    let getPythonWorker: any;

    beforeEach(async () => {
        vi.resetModules();

        mockWorker = {
            addEventListener: vi.fn(),
            removeEventListener: vi.fn(),
            postMessage: vi.fn(),
            terminate: vi.fn()
        };
        WorkerSpy = vi.fn();
        global.Worker = class {
            constructor(...args: any[]) {
                WorkerSpy(...args);
                return mockWorker;
            }
        } as any;

        // Dynamic import to ensure fresh module state (resetting the singleton 'worker' variable)
        const module = await import('./python-worker-handler');
        onPythonWorkerEvent = module.onPythonWorkerEvent;
        getPythonWorker = module.getPythonWorker;
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    it('should allow subscribing to worker events', () => {
        const listener = vi.fn();
        const unsubscribe = onPythonWorkerEvent(listener);

        // Verify worker is NOT initialized immediately (lazy subscription)
        // Actually, getPythonWorker() call was removed from onPythonWorkerEvent.
        // So global.Worker should NOT be called yet.
        expect(WorkerSpy).not.toHaveBeenCalled();

        // Now trigger worker creation
        getPythonWorker();
        expect(WorkerSpy).toHaveBeenCalled();

        // Simulate a message
        const messageHandler = (mockWorker.addEventListener as any).mock.calls.find(
            (call: any[]) => call[0] === 'message'
        )[1];

        expect(messageHandler).toBeDefined();

        const payload = {
            type: 'print',
            text: 'Hello World'
        };
        messageHandler({ data: payload });

        expect(listener).toHaveBeenCalledWith(payload as any);

        unsubscribe();

        // Simulate another message
        messageHandler({ data: payload });
        // Should not be called again
        expect(listener).toHaveBeenCalledTimes(1);
    });

    it('should handle multiple listeners', () => {
        const listenerA = vi.fn();
        const listenerB = vi.fn();

        onPythonWorkerEvent(listenerA);
        onPythonWorkerEvent(listenerB);

        getPythonWorker();
        const messageHandler = (mockWorker.addEventListener as any).mock.calls.find(
            (call: any[]) => call[0] === 'message'
        )[1];

        const payload = { type: 'print', text: 'Test' };
        messageHandler({ data: payload });

        expect(listenerA).toHaveBeenCalledWith(payload as any);
        expect(listenerB).toHaveBeenCalledWith(payload as any);
    });
});
