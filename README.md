# 🚀 TwitWipe Bot – Bulk Tweet Deleter

A **lightweight** and **fast** JavaScript script to **bulk delete tweets and unretweet posts** on Twitter (X).  
Run it directly in your browser’s console to **clean up your timeline in seconds!**  

---

## 🛠 Features

✅ Deletes all tweets automatically  
✅ Unretweets posts instead of deleting them  
✅ Fast & efficient execution  
✅ Auto-scrolls to process all tweets  
✅ Simple & easy to use  

---

## ⚠ Disclaimer

This script is for **educational purposes only**.  
Automating actions on Twitter (X) may violate their [Terms of Service](https://twitter.com/en/tos).  
**Use responsibly and at your own risk.**  

---

## 🚀 How to Use

1️⃣ **Open Twitter (X)** and navigate to your profile page.  
2️⃣ **Open the Developer Console**:
   - **Chrome:** Press `F12` or `Ctrl + Shift + J`  
   - **Firefox:** Press `F12` or `Ctrl + Shift + K`  
   - **Edge:** Press `F12` or `Ctrl + Shift + I`  
3️⃣ **Copy & paste the following script into the console:**  

```javascript
const deleteAllTweetsFast = async () => {
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    while (true) {
        const tweetContainers = Array.from(document.querySelectorAll('[data-testid="tweet"]'));
        if (tweetContainers.length === 0) {
            console.log('🚀 No more tweets found.');
            break;
        }

        await Promise.all(tweetContainers.map(async (tweet) => {
            const moreButton = tweet.querySelector('[data-testid="caret"]');
            const unretweetButton = tweet.querySelector('[data-testid="unretweet"]');

            if (unretweetButton) {
                unretweetButton.click();
                await delay(200);

                const confirmUnretweet = document.querySelector('[data-testid="unretweetConfirm"]');
                if (confirmUnretweet) {
                    confirmUnretweet.click();
                    console.log('🔄 Unretweeted a tweet.');
                    await delay(1000);
                }
                return;
            }

            if (moreButton) {
                moreButton.click();
                await delay(200);

                const menuItems = Array.from(document.querySelectorAll('[role="menuitem"]'));
                const deleteOption = menuItems.find(item => item.textContent.includes('Delete'));

                if (deleteOption) {
                    deleteOption.click();
                    await delay(200);

                    const confirmButton = document.querySelector('[data-testid="confirmationSheetConfirm"]');
                    if (confirmButton) {
                        confirmButton.click();
                        console.log('🗑️ Deleted a tweet.');
                        await delay(1000);
                    }
                }
            }
        }));

        window.scrollTo(0, document.body.scrollHeight);
        await delay(1500); // Shorter delay to quickly load more tweets
    }

    console.log('✅ All tweets & retweets removed successfully!');
};

deleteAllTweetsFast();
```

4️⃣ **Press Enter**, and the script will start deleting your tweets!  

---

## 🔧 Installation (Optional)

If you prefer, you can save the script as a **bookmarklet**:

1. Create a new bookmark in your browser.  
2. Set the URL to:  
   ```javascript
   javascript:(function(){ /* Paste script here */ })();
   ```
3. Click the bookmark while on Twitter to **run the script instantly!**  

---

## 📝 License

This project is licensed under the **MIT License** – feel free to use, modify, and share.  

---

## 💡 Need improvements or new features?

Feel free to **open an issue** or **submit a pull request**! 🚀

