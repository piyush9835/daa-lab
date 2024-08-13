public class SortComparison {
    public static void main(String[] args) {
        int[] arr = {64, 25, 12, 22, 11, 90, 45, 67, 34, 76};
        

        int[] arr1 = arr.clone();
        int[] arr2 = arr.clone();


        long startTime = System.nanoTime();
        BubbleSort.bubbleSort(arr1);
        long endTime = System.nanoTime();
        long bubbleSortTime = endTime - startTime;


        startTime = System.nanoTime();
        SelectionSort.selectionSort(arr2);
        endTime = System.nanoTime();
        long selectionSortTime = endTime - startTime;


        System.out.println("Bubble Sorted array: " + java.util.Arrays.toString(arr1));
        System.out.println("Selection Sorted array: " + java.util.Arrays.toString(arr2));


        System.out.println("Bubble Sort Time: " + bubbleSortTime + " ns");
        System.out.println("Selection Sort Time: " + selectionSortTime + " ns");
    }
}
