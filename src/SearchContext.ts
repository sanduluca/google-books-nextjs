import { createContext } from "react";

interface ISearchContext {
    searchQuery: string
    setSearchQuery: (s: string) => void
}
const SearchContext = createContext<ISearchContext>({ searchQuery: '', setSearchQuery: (s: string) => { } });

export default SearchContext;