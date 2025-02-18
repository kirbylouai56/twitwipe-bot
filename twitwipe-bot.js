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
                // Unretweet instead of deleting
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
