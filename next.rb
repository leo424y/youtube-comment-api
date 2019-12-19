
file=File.readlines('line_index')
file.each do |line| @order = line end
list = File.readlines('../archive.txt')
list.each_with_index do |vid, index| 
  input = vid.gsub('youtube ', '').chomp
  %x(node comment.js #{input}) if (index == @order.to_i)  
end
len = list.length
@more = (@order.to_i+1) % len
File.open('line_index', 'w') { |file| file.write(@more) }
