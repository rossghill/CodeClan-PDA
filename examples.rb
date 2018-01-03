# def add_fruit(new_fruit)
#   fruits = ['banana', 'apple', 'orange']
#   fruits.push(new_fruit)
#   p fruits
# end
#
# add_fruit('avocado')

@customer =
  {
    name: "Ross",
    pets: [],
    cash: 1000
  }

def add_cash(add_amount)
  @customer[:cash] += add_amount
  p @customer
end

add_cash(800)
