export interface Knowledge {
    title: string;
    knowledges: Knowledges[];
}

interface Knowledges {
    sectionTitle: string;
    description: string;
    code: ProgramingLanguages[];
}

interface ProgramingLanguages {
    code: string;
    codeDescription: string;
    codeLanguage: string;
}
