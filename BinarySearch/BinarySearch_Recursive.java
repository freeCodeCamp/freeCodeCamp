class BinarySearch {

	int binarySearch(int arr[], int l, int r, int x)
	{
		if (r >= l) {
			int mid = l + (r - l) / 2;

			if (arr[mid] == x)
				return mid;

			if (arr[mid] > x)
				return binarySearch(arr, l, mid - 1, x); //recursively called

			return binarySearch(arr, mid + 1, r, x); //recursively called
		}

		return -1;
	}

	// Main function
	public static void main(String args[])
	{
		BinarySearch ob = new BinarySearch();

		int arr[] = { 2, 3, 4, 10, 40 };
		int n = arr.length;
		int x = 10;
		int result = ob.binarySearch(arr, 0, n - 1, x);

		if (result == -1)
			System.out.println(
				"Element is not present in array");
		else
			System.out.println(
				"Element is present at index " + result);
	}
}
