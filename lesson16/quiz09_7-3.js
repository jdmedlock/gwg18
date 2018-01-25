/*
 * Programming Quiz: Bank Accounts 1 (7-3)
 * 
 * Add a printAccountSummary() method that returns the following account message:
 *    Welcome!
 *    Your balance is currently $1000 and your interest rate is 1%.
 */

var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  /**
   * Add a deposit amount to the account.
   * @param {Float} amount The amount to be deposited
   */
  deposit: function addMoney(amount) {
    if (amount > 0) {
        savingsAccount.balance += amount;
    }
  },
  /**
   * Withdraw an amount from the account.
   * @param {Float} amount The amount to be withdrawn
   */
  withdraw: function removeMoney(amount) {
      var verifyBalance = savingsAccount.balance - amount;
      if (amount > 0 && verifyBalance >= 0) {
          savingsAccount.balance -= amount;
      }
  },
  /**
   * Produce a summary of the account including it's current balance and 
   * interest rate.
   * @returns {String} A multline string that includes the current account
   * balance and interest rate.
   */
  printAccountSummary: function removeMoney() {
    return `Welcome!\nYour balance is currently \$${savingsAccount.balance} and \
your interest rate is ${savingsAccount.interestRatePercent}%.`;
  },
};

console.log(savingsAccount.printAccountSummary());
