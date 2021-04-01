const { expect } = require("chai");

describe("Token contract", function() {
  it("Deployment should assign the total supply of tokens to the owner", async function() {
    // A Signer in ethers.js is an object that represents an Ethereum account
    const [owner, addr1, addr2] = await ethers.getSigners();

    // A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts
    const Token = await ethers.getContractFactory("Token");

    // Calling deploy() on a ContractFactory will start the deployment, and return a Promise that resolves to a Contract
    const hardhatToken = await Token.deploy();

    const ownerBalance = await hardhatToken.balanceOf(owner.address);
    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);

    // Transfer 50 tokens from owner to addr1
    await hardhatToken.transfer(addr1.address, 50);
    expect(await hardhatToken.balanceOf(addr1.address)).to.equal(50);
    
    // Transfer 50 tokens from addr1 to addr2
    await hardhatToken.connect(addr1).transfer(addr2.address, 50);
    expect(await hardhatToken.balanceOf(addr2.address)).to.equal(50);
    
  });
});