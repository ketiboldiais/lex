/**
 * An enumerated value corresponding
 * to a token.
 */
enum TOKEN {
    LEFT_PAREN, // Maps to the character "("
    RIGHT_PAREN, // ")"
    LEFT_BRACE, // "{"
    RIGHT_BRACE, // "}"
    COMMA, // ","
    DOT, // "."
    MINUS, // "-"
    PLUS, // "+"
    SEMICOLON, // ";"
    SLASH, // "/"
    STAR, // "*"
    BANG, // "!"
    BANG_EQUAL, // "!="
    EQUAL, // "="
    EQUAL_EQUAL, // "=="
    GREATER, // ">"
    GREATER_EQUAL, // ">="
    LESS, // "<"
    LESS_EQUAL, // "<="
    IDENTIFIER, // A valid name
    STRING, // A valid string value
    INT, // A valid integer value 
    FLOAT, // A valid floating point value
    AND, // Logical operator "and"
    OR, // Logical operator "or"
    NOT, // Logical operator "not"
    CLASS, // Keyword "class"
    FOR, // Keyword "false"
    FN, // Keyword "fn"
    IF, // Keyword "if"
    ELSE, // Keyword "else"
    PRINT, // Keyword "print"
    RETURN, // Keyword "return"
    SUPER, // Keyword "super"
    THIS, // Keyword "this"
    VAR, // Keyword "var"
    WHILE, // Keyword "while"
    FALSE, // Boolean primitive "false"
    TRUE, // Boolean primitive "true"
    NULL, // Primitive "null"
    ERROR, // Utility token for an error
    EOF // Utility token for end-of-file
}

class Erratum {
    
}

type Primitive = number | boolean | string | null;

class Token {
    type: Token;
    lexeme: string;
    line: number;
    literal: Primitive;
    constructor(
        type: Token, 
        lexeme:string,
        line: number,
        literal: Primitive,
    ) {
        this.type=type;
        this.lexeme=lexeme;
        this.line=line;
        this.literal=literal;
    }
}

function scan(source: string) {
    let start = 0;
    let current = 0;
    let line = 1;
}

export const scanner = (source:string) => {
    return source;
}