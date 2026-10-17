echo "Enter the number of elemensts"
read n 
sum=0
echo "Enter the array elements"
for((i=0; i<n; i++))
do 
read arr[i]
sum=$((sum+arr[i]))
done
echo "sum of array elements is : $sum"
