
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { onPythonWorkerEvent, getPythonWorker } from './python-worker-handler';

describe('python-worker-handler', () => {
    let mockWorker: any;

    beforeEach(() => {
        mockWorker = {
            addEventListener: vi.fn(),
            removeEventListener: vi.fn(),
            postMessage: vi.fn(),
            terminate: vi.fn()
        };
        global.Worker = vi.fn().mockReturnValue(mockWorker);
    });

    afterEach(() => {
        vi.clearAllMocks();
        // We intentionally don't reset the module state here easily because it's a singleton.
        // Ideally we should have a reset function exported for testing, but for now we rely on
        // verifying behavior.
    });

    it('should allow subscribing to worker events', () => {
        const listener = vi.fn();
        const unsubscribe = onPythonWorkerEvent(listener);

        // Verify worker is NOT initialized immediately (lazy subscription)
        // Actually, getPythonWorker() call was removed from onPythonWorkerEvent.
        // So global.Worker should NOT be called yet.
        expect(global.Worker).not.toHaveBeenCalled();

        // Now trigger worker creation
        getPythonWorker();
        expect(global.Worker).toHaveBeenCalled();

        // Simulate a message
        const messageHandler = (mockWorker.addEventListener as any).mock.calls.find(
            (call: any[]) => call[0] === 'message'
        )[1];

        expect(messageHandler).toBeDefined();

        const event = {
            data: {
                type: 'print',
                text: 'Hello World'
            }
        };
        messageHandler({ data: event });

        expect(listener).toHaveBeenCalledWith(event.data);

        unsubscribe();

        // Simulate another message
        messageHandler({ data: event });
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

        const event = { data: { type: 'print', text: 'Test' } };
        messageHandler({ data: event });

        expect(listenerA).toHaveBeenCalledWith(event.data);
        expect(listenerB).toHaveBeenCalledWith(event.data);
    });
});
