// Java implementation of iterative Binary Search
class BinarySearch {
	// Returns index of x if it is present in arr[l....r], else return -1
	int binarySearch(int arr[], int l, int r, int x)
	{
		while (l <= r) {
			int mid = (l + r) / 2;

			// If the element is present at the
			// middle itself
			if (arr[mid] == x) {
				return mid;

			// If element is smaller than mid, then
			// it can only be present in left subarray
			// so we decrease our r pointer to mid - 1 
			} else if (arr[mid] > x) {
				r = mid - 1;

			// Else the element can only be present
			// in right subarray
			// so we increase our l pointer to mid + 1
			} else {
			l = mid + 1;
			} 
		}

		// We reach here when element is not present
		// in array
		return -1;
	}

	// Driver method to test above
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
