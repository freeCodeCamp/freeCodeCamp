import * as React from 'react';

interface SlotProps extends React.HTMLAttributes<HTMLElement> {
    children?: React.ReactNode;
}
declare function createSlot(ownerName: string): React.ForwardRefExoticComponent<SlotProps & React.RefAttributes<HTMLElement>>;
declare const Slot: React.ForwardRefExoticComponent<SlotProps & React.RefAttributes<HTMLElement>>;
interface SlottableProps {
    children: React.ReactNode;
}
interface SlottableComponent extends React.FC<SlottableProps> {
    __radixId: symbol;
}
declare function createSlottable(ownerName: string): SlottableComponent;
declare const Slottable: SlottableComponent;

export { Slot as Root, Slot, type SlotProps, Slottable, createSlot, createSlottable };
