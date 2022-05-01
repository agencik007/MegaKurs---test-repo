export class User {
    private _loggedIn = false;
    private _email: string | null = null;

    get loggedIn(): boolean {
        return this._loggedIn;
    }

    get email(): string | null {
        return this._email;
    }
}