interface BaseMutation {
  selector: string;
  elements: Set<Element>;
}

interface HTMLMutation extends BaseMutation {
  kind: 'html';
  mutate: (innerHtml: string) => string;
}

interface ClassnameMutation extends BaseMutation {
  kind: 'class';
  mutate: (classNames: Set<string>) => void;
}

interface AttrMutation extends BaseMutation {
  kind: 'attribute';
  attribute: string;
  mutate: (value: string | null) => string | null;
}

interface PositionMutation extends BaseMutation {
  kind: 'position';
  mutate: () => ElementPosition;
}

interface ElementPosition {
  parentSelector: string;
  insertBeforeSelector?: null | string;
}
interface ElementPositionWithDomNode {
  parentNode: HTMLElement;
  insertBeforeNode: HTMLElement | null;
}

type Mutation =
  | HTMLMutation
  | ClassnameMutation
  | AttrMutation
  | PositionMutation;

type MutationKind = Mutation['kind'];

interface ElementPropertyRecord<T, V> {
  _positionTimeout: NodeJS.Timeout | number | null;
  observer: MutationObserver;
  originalValue: V;
  virtualValue: V;
  isDirty: boolean;
  mutations: T[];
  el: Element;
  getCurrentValue: (el: Element) => V;
  setValue: (el: Element, value: V) => void;
  mutationRunner: (record: ElementPropertyRecord<T, V>) => void;
}

type HTMLRecord = ElementPropertyRecord<HTMLMutation, string>;
type ClassnameRecord = ElementPropertyRecord<ClassnameMutation, string>;
type AttributeRecord = ElementPropertyRecord<AttrMutation, string | null>;
type PositionRecord = ElementPropertyRecord<
  PositionMutation,
  ElementPositionWithDomNode
>;

interface ElementRecord {
  element: Element;
  html?: HTMLRecord;
  classes?: ClassnameRecord;
  attributes: {
    [key: string]: AttributeRecord;
  };
  position?: PositionRecord;
}
