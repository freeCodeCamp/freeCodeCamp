class BinarySearch {
	int binarySearch(int arr[], int l, int r, int x)
	{
		while (l <= r) {
			int mid = (l + r) / 2;

			if (arr[mid] == x) {
				return mid;
        
			} else if (arr[mid] > x) {
				r = mid - 1;

			} else {
			l = mid + 1;
			} 
		}

		return -1;
	}

	// Driver code/ Main function
	public static void main(String args[])
	{
		BinarySearch ob = new BinarySearch();

		int arr[] = { 2, 3, 4, 10, 40 };
		int n = arr.length;
		int x = 10;
		int result = ob.binarySearch(arr, 0, n - 1, x);

		if (result == -1)
			System.out.println("Element not present");
		else
			System.out.println("Element found at index "
							+ result);
	}
}
