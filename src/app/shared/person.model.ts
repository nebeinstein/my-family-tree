export class Person {
    public name: string[];
    public dob: string;
    public dod: string;
    public imagePath: string;

    constructor(name: string[], dob: string, dod: string, imagePath: string) {
        this.name = name;
        this.dob = dob;
        this.dod = dod;
        this.imagePath = imagePath;
    }
}