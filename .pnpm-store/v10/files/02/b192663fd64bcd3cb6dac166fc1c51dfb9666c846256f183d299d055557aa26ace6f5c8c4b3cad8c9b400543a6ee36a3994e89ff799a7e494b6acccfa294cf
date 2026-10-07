declare class Paginator {
    currentPage: number;
    total: number;
    padding: number;
    constructor(params: {
        currentPage: number;
        total: number;
        padding: number;
    });
    pages(): number[];
    nbPagesDisplayed(padding: number, total: number): number;
    calculatePaddingLeft(current: number, padding: number, total: number, totalDisplayedPages: number): number;
    isLastPage(): boolean;
    isFirstPage(): boolean;
}
export default Paginator;
