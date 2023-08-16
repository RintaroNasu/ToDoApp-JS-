const onClickadd = () => {
    // テキストボックスの値を取得して、初期化する。
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value="";
    createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompletelist = (target) =>{
    document.getElementById("incomplete-list").removeChild(target);
}

// 未完了リストに追加する関数
const createIncompleteList = (text) =>{
    // divの生成
    const div = document.createElement("div");
    div.className="list-row";

    // liタグの生成
    const li = document.createElement("li");
    li.innerText = text;
    
    // button(完了)タグの生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
        //押された完了ボタンの親タグ(div)を未完了リストから削除する   
        deleteFromIncompletelist(completeButton.parentNode); 

        // 完了リストに追加する要素
        addTarget = completeButton.parentNode;

        // TOD内容を取得
        text = addTarget.firstElementChild.innerText;

        // div以下を初期化
        addTarget.textContent = null;

        // liタグを生成
        const li = document.createElement("li");
        li.innerText = text;

        // buttonタグの生成
        const backButton = document.createElement("button");
        backButton.innerText = "戻す";
        backButton.addEventListener("click",() => {
            // 押された戻すボタンの親タグ(div)を完了リストから削除
            const deleteTarget = backButton.parentNode;
            document.getElementById("complete-list").removeChild(deleteTarget);

            // テキスト取得
            const text = backButton.parentNode.firstElementChild.innerText;
            createIncompleteList(text);
        });

        // divタグの子要素に各要素を設定
        addTarget.appendChild(li);
        addTarget.appendChild(backButton);
        
        // 完了リストに追加
        document.getElementById("complete-list").appendChild(addTarget);
    })

    // button(削除)タグの生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
        //押された削除ボタンの親タグ(div)を未完了リストから削除する   
        deleteFromIncompletelist(deleteButton.parentNode); 
    })
    
    // divタグの子要素に各要素を設定
    div.appendChild(li);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);

    // 未完了のリストに追加
    document.getElementById("incomplete-list").appendChild(div);
}

document
    .getElementById("add-button")
    .addEventListener("click",() => onClickadd());