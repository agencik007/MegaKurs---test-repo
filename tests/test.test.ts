import {ChildRecord} from "../records/child.record";

let child: ChildRecord;

beforeAll(async () => {
    child = await ChildRecord.getOne('777777');
});

jest
    .spyOn(ChildRecord, 'getOne')
    .mockImplementation(async (id: string) => {
        return new ChildRecord({
            id,
            name: 'Testowy',
            giftId: '123',
        });
    });

jest
    .spyOn(ChildRecord.prototype, 'update')
    .mockImplementation(async () => {});


test('foo bar test test', async () => {

    console.log(child);

    expect(child).toBeDefined();
    expect(child.id).toEqual('777777');

});

test('foo bar test test', async () => {
    await child.update();
});


