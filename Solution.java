import java.util.*;

public class Solution
{
    public static void main(String args[])
    {
        System.out.println(Solution.solveNQueens(4));
    }
    public static ArrayList<List<String>> solveNQueens(int n)
    {
        ArrayList<List<String>> board=new ArrayList<>();
        for(int i =0;i<n;i++)
        {
            ArrayList<String> sub=new ArrayList<>();
            for(int j=0;j<n;j++)
            {
                sub.add(".");

            }
            board.add(sub);}
        ArrayList<List<String>> resultant=new ArrayList<>();
        Solution.queens(board,0,resultant);
        return resultant;
    }



    public static int queens(ArrayList<List<String>> board,int row,ArrayList<List<String>> resultant)
    {
        if(row==(board.size()))
        {
            ArrayList<String> subi=new ArrayList<>();
            for(int p=0;p<board.size();p++)
            {
                String res=String.join("",board.get(p));
                subi.add(res);

            }
            resultant.add(subi);
            return 1;
        }
        int count=0;
        for(int col=0;col<board.size();col++)
        {
            if(isSafe(board,row,col))
            {
                board.get(row).set(col,"Q");
                count=count+queens(board,(row+1),resultant);
                board.get(row).set(col,".");


            }
        }
        return count;
    }
    public static boolean isSafe(ArrayList<List<String>> board,int i,int j)
    {
        for(int x=0;x<i;x++)
        {
            if((board.get(x).get(j)).equals("Q"))
            {
                return false;
            }
        }
        int maxLeft=(int)Math.min(i,j);
        for(int x=1;x<=maxLeft;x++)
        {
            if((board.get(i-x).get(j-x)).equals("Q"))
            {
                return false;
            }
        }
        int maxRight=(int)Math.min(i,board.size()-j-1);
        for(int x=1;x<=maxRight;x++)
        {
            if((board.get(i-x).get(j+x)).equals("Q"))
            {
                return false;
            }
        }
        return true;
    }

}
