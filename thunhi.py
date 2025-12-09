def heapify(arr, n, i):
    # Tìm phần tử lớn nhất trong ba phần tử: cha, con trái và con phải
    largest = i
    left = 2 * i + 1    # Chỉ số con trái
    right = 2 * i + 2   # Chỉ số con phải

    # Kiểm tra nếu con trái có giá trị lớn hơn nút hiện tại
    if left < n and arr[left] > arr[largest]:
        largest = left

    # Kiểm tra nếu con phải có giá trị lớn hơn nút hiện tại
    if right < n and arr[right] > arr[largest]:
        largest = right

    # Nếu largest không phải là nút hiện tại, hoán đổi và gọi lại heapify
    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)

def heap_sort(arr):
    n = len(arr)

    # Xây dựng Max-Heap
    # Bắt đầu từ nút không phải lá cuối cùng (n//2 - 1)
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)

    # Sắp xếp mảng bằng cách hoán đổi phần tử gốc với phần tử cuối cùng
    for i in range(n - 1, 0, -1):
        # Hoán đổi phần tử gốc với phần tử cuối cùng
        arr[i], arr[0] = arr[0], arr[i]
        # Gọi heapify để khôi phục Max-Heap cho phần còn lại của mảng
        heapify(arr, i, 0)

# Chương trình chính
if __name__ == "__main__":
    arr = [4, 10, 3, 5, 1]
    print("Mảng ban đầu:", arr)
    heap_sort(arr)
    print("Mảng sau khi sắp xếp:", arr)