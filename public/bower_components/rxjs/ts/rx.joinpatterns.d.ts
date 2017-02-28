declare module Rx {

    export class Plan<T> { }

    export interface Pattern2<T1, T2> {
        /**
        *  Creates a pattern that matches the current plan matches and when the specified observable sequences has an available value.
        *  @param other Observable sequence to match in addition to the current pattern.
        *  @return {Pattern} Pattern object that matches when all observable sequences in the pattern have an available value.
        */
        and<T3>(other: Observable<T3>): Pattern3<T1, T2, T3>;
        /**
        *  Matches when all observable sequences in the pattern (specified using a chain of and operators) have an available value and projects the values.
        *  @param {Function} selector Selector that will be invoked with available values from the source sequences, in the same order of the sequences in the pattern.
        *  @return {Plan} Plan that produces the projected values, to be fed (with other plans) to the when operator.
        */
        thenDo<TR>(selector: (item1: T1, item2: T2) => TR): Plan<TR>;
    }
    interface Pattern3<T1, T2, T3> {
        /**
        *  Creates a pattern that matches the current plan matches and when the specified observable sequences has an available value.
        *  @param other Observable sequence to match in addition to the current pattern.
        *  @return {Pattern} Pattern object that matches when all observable sequences in the pattern have an available value.
        */
        and<T4>(other: Observable<T4>): Pattern4<T1, T2, T3, T4>;
        /**
        *  Matches when all observable sequences in the pattern (specified using a chain of and operators) have an available value and projects the values.
        *  @param {Function} selector Selector that will be invoked with available values from the source sequences, in the same order of the sequences in the pattern.
        *  @return {Plan} Plan that produces the projected values, to be fed (with other plans) to the when operator.
        */
        thenDo<TR>(selector: (item1: T1, item2: T2, item3: T3) => TR): Plan<TR>;
    }
    interface Pattern4<T1, T2, T3, T4> {
        /**
        *  Creates a pattern that matches the current plan matches and when the specified observable sequences has an available value.
        *  @param other Observable sequence to match in addition to the current pattern.
        *  @return {Pattern} Pattern object that matches when all observable sequences in the pattern have an available value.
        */
        and<T5>(other: Observable<T5>): Pattern5<T1, T2, T3, T4, T5>;
        /**
        *  Matches when all observable sequences in the pattern (specified using a chain of and operators) have an available value and projects the values.
        *  @param {Function} selector Selector that will be invoked with available values from the source sequences, in the same order of the sequences in the pattern.
        *  @return {Plan} Plan that produces the projected values, to be fed (with other plans) to the when operator.
        */
        thenDo<TR>(selector: (item1: T1, item2: T2, item3: T3, item4: T4) => TR): Plan<TR>;
    }
    interface Pattern5<T1, T2, T3, T4, T5> {
        /**
        *  Creates a pattern that matches the current plan matches and when the specified observable sequences has an available value.
        *  @param other Observable sequence to match in addition to the current pattern.
        *  @return {Pattern} Pattern object that matches when all observable sequences in the pattern have an available value.
        */
        and<T6>(other: Observable<T6>): Pattern6<T1, T2, T3, T4, T5, T6>;
        /**
        *  Matches when all observable sequences in the pattern (specified using a chain of and operators) have an available value and projects the values.
        *  @param {Function} selector Selector that will be invoked with available values from the source sequences, in the same order of the sequences in the pattern.
        *  @return {Plan} Plan that produces the projected values, to be fed (with other plans) to the when operator.
        */
        thenDo<TR>(selector: (item1: T1, item2: T2, item3: T3, item4: T4, item5: T5) => TR): Plan<TR>;
    }
    interface Pattern6<T1, T2, T3, T4, T5, T6> {
        /**
        *  Creates a pattern that matches the current plan matches and when the specified observable sequences has an available value.
        *  @param other Observable sequence to match in addition to the current pattern.
        *  @return {Pattern} Pattern object that matches when all observable sequences in the pattern have an available value.
        */
        and<T7>(other: Observable<T7>): Pattern7<T1, T2, T3, T4, T5, T6, T7>;
        /**
        *  Matches when all observable sequences in the pattern (specified using a chain of and operators) have an available value and projects the values.
        *  @param {Function} selector Selector that will be invoked with available values from the source sequences, in the same order of the sequences in the pattern.
        *  @return {Plan} Plan that produces the projected values, to be fed (with other plans) to the when operator.
        */
        thenDo<TR>(selector: (item1: T1, item2: T2, item3: T3, item4: T4, item5: T5, item6: T6) => TR): Plan<TR>;
    }
    interface Pattern7<T1, T2, T3, T4, T5, T6, T7> {
        /**
        *  Creates a pattern that matches the current plan matches and when the specified observable sequences has an available value.
        *  @param other Observable sequence to match in addition to the current pattern.
        *  @return {Pattern} Pattern object that matches when all observable sequences in the pattern have an available value.
        */
        and<T8>(other: Observable<T8>): Pattern8<T1, T2, T3, T4, T5, T6, T7, T8>;
        /**
        *  Matches when all observable sequences in the pattern (specified using a chain of and operators) have an available value and projects the values.
        *  @param {Function} selector Selector that will be invoked with available values from the source sequences, in the same order of the sequences in the pattern.
        *  @return {Plan} Plan that produces the projected values, to be fed (with other plans) to the when operator.
        */
        thenDo<TR>(selector: (item1: T1, item2: T2, item3: T3, item4: T4, item5: T5, item6: T6, item7: T7) => TR): Plan<TR>;
    }
    interface Pattern8<T1, T2, T3, T4, T5, T6, T7, T8> {
        /**
        *  Creates a pattern that matches the current plan matches and when the specified observable sequences has an available value.
        *  @param other Observable sequence to match in addition to the current pattern.
        *  @return {Pattern} Pattern object that matches when all observable sequences in the pattern have an available value.
        */
        and<T9>(other: Observable<T9>): Pattern9<T1, T2, T3, T4, T5, T6, T7, T8, T9>;
        /**
        *  Matches when all observable sequences in the pattern (specified using a chain of and operators) have an available value and projects the values.
        *  @param {Function} selector Selector that will be invoked with available values from the source sequences, in the same order of the sequences in the pattern.
        *  @return {Plan} Plan that produces the projected values, to be fed (with other plans) to the when operator.
        */
        thenDo<TR>(selector: (item1: T1, item2: T2, item3: T3, item4: T4, item5: T5, item6: T6, item7: T7, item8: T8) => TR): Plan<TR>;
    }
    interface Pattern9<T1, T2, T3, T4, T5, T6, T7, T8, T9> {
        /**
        *  Matches when all observable sequences in the pattern (specified using a chain of and operators) have an available value and projects the values.
        *  @param {Function} selector Selector that will be invoked with available values from the source sequences, in the same order of the sequences in the pattern.
        *  @return {Plan} Plan that produces the projected values, to be fed (with other plans) to the when operator.
        */
        thenDo<TR>(selector: (item1: T1, item2: T2, item3: T3, item4: T4, item5: T5, item6: T6, item7: T7, item8: T8, item9: T9) => TR): Plan<TR>;
    }

    export interface Observable<T> {
        /**
        *  Creates a pattern that matches when both observable sequences have an available value.
        *
        *  @param right Observable sequence to match with the current sequence.
        *  @return {Pattern} Pattern object that matches when both observable sequences have an available value.
        */
        and<T2>(right: Observable<T2>): Pattern2<T, T2>;
    }

    export interface Observable<T> {
        /**
        *  Matches when the observable sequence has an available value and projects the value.
        *
        *  @param {Function} selector Selector that will be invoked for values in the source sequence.
        *  @returns {Plan} Plan that produces the projected values, to be fed (with other plans) to the when operator.
        */
        thenDo<TR>(selector: (item1: T) => TR): Plan<TR>;
    }

    export interface ObservableStatic {
        /**
        *  Joins together the results from several patterns.
        *
        *  @param plans A series of plans (specified as an Array of as a series of arguments) created by use of the Then operator on patterns.
        *  @returns {Observable} Observable sequence with the results form matching several patterns.
        */
        when<TR>(plan: Plan<TR>): Observable<TR>;
    }

}
declare module "rx.joinpatterns" { export = Rx; }
