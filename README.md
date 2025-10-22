# Amazon-Price-Counter

This is an Amazon price counter.

Here's how it's work:
When the Object Price is less than $50 then it's add an $10 delivery charge but when the Object Price is $50 or More then its free delivery (No Extra Delivery Charges). 

It works like when we add a price then it convert into cents (Multiply by 100) and then it checks the price is greater than $50 or not. If it is more than $50 then its free delivery but when its less than $50 then it applies the $10 charge. To add that $10 it first conevrt into cents and then add all the price and then it divide them by 100.

The conversion in cents is necessary. Let's say you give a price of $30 then the output is $40 but when you give the price $30.99 then it gives $41.00009, so it has has an error and by converting into cents (multiplying by 100) solves this problem.

And it's also have and Subscribe button. When You click that subscribe button then it shows Subscribed and chamges it color.

Here's the little preview!

<img width="1904" height="894" alt="Screenshot 2025-10-22 104342" src="https://github.com/user-attachments/assets/6aa3f209-fd94-4a65-8222-36ffce63a08b" />
