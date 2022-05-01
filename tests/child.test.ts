import {GiftRecord} from "../records/gift.record";
import { pool } from "../utils/db";

let gift: GiftRecord;

beforeAll(async () => {
    // 1. Wyczyść całą testowaną tabelę bazy danych.
    // 2. Zwróć przewidywalne dane (po prostu zdefiniowane na stałe).
    gift = new GiftRecord({
        name: 'Tester',
        count: 123,
    });
});

afterAll(async () => {
    await pool.end();
});

test('Not inserted ChildRecord should have no id', async () => {
    expect(gift.id).toBeUndefined();
});

test('Inserted ChildRecord should have an id', async () => {
    await gift.insert();

    expect(gift.id).toBeDefined();
    expect(gift.id).toMatch(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/);
});