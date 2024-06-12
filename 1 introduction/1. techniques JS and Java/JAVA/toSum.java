class toSum {
    public static void main(String[] args) {
        int[] arr = {1,2,3,4,5};
        int target = 9;
        int n = arr.length;
        
        // outer loop 
        for (int i = 0; i <= n - 2; i++) {
            // inner loop
            for (int j = i + 1; j < n; j++) {
                if (arr[i] + arr[j] == target) {
                    System.out.println("Indices: " + i + ", " + j);
                }
            }
        }
    }
}
