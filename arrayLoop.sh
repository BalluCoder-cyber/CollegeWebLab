arr=(10 40 95 29)
for i in ${arr[@]}
do
echo $i
done

echo "enter 5 numbers:"
for((i=0; i<5; i++))
do
read arr2[$i]
done
echo "array elements are:"
for((i=0; i<5; i++))
do
echo ${arr2[$i]}
done
