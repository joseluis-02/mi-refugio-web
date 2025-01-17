 export interface BookResponse {
    names:string[];
    abrev:string;
    chapters: number;
    testament: string;
}

export interface Book {
    name: string;
    abrev: string;
    chapters: number;
    testament: string;
}

export interface VerseResponse  {
    verse: string,
    number: number,
    study?: string,
    id: string

}

export interface BookByNameAndChapterResponse {
    testament: string,
    name: string,
    num_chapters: number,
    chapter: number,
    vers: VerseResponse[]
}