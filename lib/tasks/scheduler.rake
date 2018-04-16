desc "Heroku scheduler tasks"
task :need_to_pay_mailer => :environment do
  puts "Send email to users who need to pay for their purchase."
  Purchase.need_to_pay_mailer
  puts "Purchase mail sent!"
end
task :delete_expired_purchase => :environment do
  puts "Delete all old purchases."
  Purchase.delete_expired_purchase
  puts "Purchases deleted!"
end