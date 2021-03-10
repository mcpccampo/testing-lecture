import bankAccount from '../bankAccount';

describe('bankAccount', () => {
    test('bankAccount initial balance should be 1000', () => {
        expect(bankAccount.balance).toEqual(1000)
    })

    test('depositMoney should correctly add to the balance', () => {
        const originalBalance = bankAccount.balance
        bankAccount.depositMoney(500)
        expect(bankAccount.balance).toBe(originalBalance + 500)
    })

    test('withdrawMoney should correctly subtract from the balance', () => {
        const originalBalance = bankAccount.balance
        bankAccount.withdrawMoney(500)
        expect(bankAccount.balance).toBe(originalBalance - 500)
    })

    test('withdrawMoney should not allow withdrawals exceeding the balance', () => {
        bankAccount.balance = 0
        expect(() => bankAccount.withdrawMoney(500)).toThrow()
    })
})