#!/bin/bash

cd "$(dirname "$0")"

for file in `ls ${DIR} | grep "\.md"`
do
  dest=../${file%.*}.html
  cat _header.html > $dest
  kramdown $file >> $dest
  cat _footer.html >> $dest
done
