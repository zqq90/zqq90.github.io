#!/bin/bash

cd "$(dirname "$0")"

for file in `ls ${DIR} | grep ".md"`
do
  diff ${file}
done
