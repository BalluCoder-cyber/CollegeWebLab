arr=(10 20 30 40 50)
echo "Enter the element to search:"
read key

found=0

echo "Length of array:${#arr[@]}"

for ((i=0; i<${#arr[@]}; i++))
do
    if [ "${arr[i]}" -eq "$key" ]
    then
        echo "Element found at position $((i+1))"
        found=1
        break
    fi
done

if [ "$found" -eq 0 ]
then
    echo "Element not found"
fi

