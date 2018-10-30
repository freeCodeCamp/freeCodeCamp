---
title: Basic blockchain implementation
---

# Basic blockchain implementation using ArrayList of Java

> This's a very basic implementation to get knowledge about blockchain.

## Quick explanation:

Blockchain is a list of blocks with "every block contain verified content of the previous block".
Then we use collision-free attribute of the cryptographic hash function to verify "the content of the previous block".
This example will use SHA256 hash function, and use built-in ArrayList type of Java.

## Basic struture:

A block include at least header and data.
A header contain the verified information of the previous block, or the bash code in this case.
The very first block is called GENESIS block, with the bash code is the its code.

> We can see blockhain is data struture base on another struture.

## Note:
 - Since we're using Java, for quickly, the example will use public attribute instead of getter and setter methods.
 - Data in blockchain could be changed, but it will take a greate cost will the big data.

## Hash library
We's use the built-in library

```
import java.security.*;
public class Sha
{
  public static String hash256(String data) //throws NoSuchAlgorithmException 
  {
    try
    {
      MessageDigest md = MessageDigest.getInstance("SHA-256");
      md.update(data.getBytes());
      return bytesToHex(md.digest());
    }
    catch(Exception e)
    {
      System.out.println(e.toString());
    }
    return "ERROR";
  }
  public static String bytesToHex(byte[] bytes) 
  {
    StringBuffer result = new StringBuffer();
    for (byte byt : bytes) result.append(Integer.toString((byt & 0xff) + 0x100, 16).substring(1));
    return result.toString();
  }
}
```

## Create Block

> Every block with contain a header is hash code of the previous block.
    
```
public class Block
{
  //Header
  public String previousHash;
  
  //Data
  public String data;
  public Block(String _data, String _previousHash)
  {
    this.data = _data;
    this.previousHash = _previousHash;
  }
  public String getHash()
  {
    return Sha.hash256(this.previousHash + this.data);
  }
  public String toString()
  {
    return String.format(" dataValue:\t %s\n previousHash:\t %s\n currrentHash:\t %s\n", this.data, this.previousHash, this.getHash());
  }
}

```
    
## Create Blockchain

```
import java.util.*;
public class Blockchain
{
  public List<Block> blocks;
  public void add(String _data)
  {
    Block previousBlock = this.blocks.get(this.blocks.size()-1);
    this.blocks.add(new Block(_data, previousBlock.getHash()));
  }
  public Blockchain()
  {
    this.blocks = new ArrayList<Block>();
    this.blocks.add(new Block("GENESIS", Sha.hash256("GENESIS")));
  }
}
```

## Using
    
```
import java.util.*;
public class BlockchainDemo
{
  public static void main(String args[])
  {
  
    //Generate datas
  
    List<String> datas = new ArrayList<String>();
    for(int i=0; i<=10; i++)
    {
      datas.add(Integer.toString(i));
    }
  
    //Add blocks in to blockchain with the created datas
  
    Blockchain blockchain = new Blockchain();
  
    datas.forEach(_data -> blockchain.add(_data));
  
    blockchain.blocks.forEach(_block -> System.out.println(_block.toString()));
  }
}
```

## Verify the blockchain

This function will verify if our Blockchain is "trusted", that meant not any block updated


```
public static boolean verify(Blockchain _blockchain)
{
  Blockchain.Block previousBlock = _blockchain.blocks.get(0);
  boolean res = true;
  for(int i = 1; i < _blockchain.blocks.size(); i++)
  {
    Blockchain.Block currentBlock = _blockchain.blocks.get(i);
    if ( !previousBlock.getHash().equals(currentBlock.previousHash) )
    {
      System.out.println("\t\tBROKEN");
      res = false;
    }
  
    System.out.println(currentBlock.toString());
  
    previousBlock = _blockchain.blocks.get(i);
  }
  return res;
}

```
