### Testing task 1 code:

# Carry out static testing on the code below.
# Read through the code.
# Comment any errors you can see without correcting them.


def func1 val
  if val = 1   # '=' is assignment, needs to be '=='
  return true
  else
  return false
  end
end

dif max a b   #function not declared, name not in snakecase
  if a > b
      return a
  else
  b   #formatting, return keyword added for consistency or removed on line 18
  end
end
end    #extra end statement

def looper
  for i in 1..10
  puts i
  end
end

failures = 0

if looper == 10   #looper.count
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1   # can be shortened to failures += 1
# missing end statement

if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1   # can be shortened to failures += 1
end


if max(100,1) == 100
  puts "max(100,1) passed"
else
  puts "func1(3) failed"   # should be "dif_max_a_b failed"
  failrues = failures + 1   #typo 'failrues' can be shortened to failures += 1
end


if failures   # == 3 or != nil
  puts "Test Failed"
else
  puts "Test Passed"
end
