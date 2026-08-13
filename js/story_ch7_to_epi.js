/* 《歲神》全章節精細劇本 —— 第七章至第九章及尾聲 (js/story_ch7_to_epi.js) */

const chapter7Script = [
    { type: 'bgm', src: BGM_STONEGATE, title: '石門之下 (狂暴傀儡)' },
    { type: 'v8hud', active: true },
    { type: 'tint', color: 'darkred' },
    { type: 'chapter', text: '第七章：喜喪' },
    { speaker: '系統', text: '[ 影音檔案編號：199X-07-16_DAWN ]<br>來源： 蘇澈手持 V8 攝影機（倒在地板45度角）' },
    { speaker: '系統', text: '祠堂內空氣乾燥瀰漫藏紅花香。中央坐著金箔包裹呼吸起伏的肉身佛（歲神/零號病人敖羅）。' },
    { speaker: '苗司大巫', text: '（手拿金針慈愛看著佛像）「少主只是睡著了。喜宴辦好賓客到齊他就會醒。給貴客上茶！」' },
    { speaker: '系統', text: '失蹤的駱安穿清朝馬褂壽衣、臉塗胭脂、嘴角被紅線縫成微笑，眼淚直流卻無法控制軀體，端著滿盤骨刀走出來！' },
    { speaker: '駱安', text: '（狂暴掙扎，流淚大喊）「殺……了……我……快……跑……我控制不住……」' },
    { speaker: '裴得', text: '「藍嵐！鎖住他的關節！林醫生，用手術刀切斷他脊椎第3與第4節之間的神經連接點！進行物理麻醉！」' },
    { speaker: '系統', text: '藍嵐拼死從背後鎖住駱安。林恩滑步上前，手持手術刀狠狠刺入後頸關節深處！刀鋒切斷菌絲提線——嘣！駱安軟倒癱瘓保留意識。' },
    { speaker: '裴得', text: '（手持生鏽止血鉗走向苗大巫）「苗老頭，當年的那台手術還沒做完。現在，我們把它做完吧。」' },
    { type: 'chapter', text: '第七章：喜喪 —— 完結' },
    {
        type: 'ledger',
        title: '[ 帳本紀錄：第七章 · 喜喪 ]',
        item: '狂暴傀儡物理麻醉救援',
        target: '駱安（諾家班班主）',
        detail: '切斷脊椎第3-4節真菌中樞神經，成功癱瘓駱安避免傷人，保留生氣。',
        note: '刀快用完了。穆老闆這筆尾款必須加錢！',
        nextAction: () => startGame('ch8')
    }
];

const chapter8Script = [
    { type: 'bgm', src: BGM_STONEGATE, title: '石門之下 (肉身佛轟鳴)' },
    { type: 'v8hud', active: true },
    { type: 'tint', color: 'bwstatic' },
    { type: 'chapter', text: '第八章：金箔下的心跳' },
    { speaker: '系統', text: '[ 影音檔案編號：199X-07-16_FINAL_ACT ]<br>肉身佛胸口金箔龜裂滲出黑泥與水仙根莖。咚——咚——巨大的心跳聲在骨骼深處轟鳴！' },
    { speaker: '裴得', text: '（把李客碳化的骨粉白磷撒向空中點燃紅線）「這不是妖術！這是那個傻學生用骨頭換來的樣本！白磷與骨粉！」' },
    { speaker: '系統', text: '紅線在白磷烈火中滋滋退縮。魏天縱跳上神台，手中生鏽止血鉗刺入肉身佛胸口主動脈紅線！噗嗤！黑血噴湧！' },
    { speaker: '肉身佛', text: '「啊啊啊啊啊——！！」（肉身佛口中爆發非人哀嚎）' },
    { speaker: '裴得', text: '（黑血中對林恩大吼）「帶上喬若楠！去後面尋找穿嫁衣的顧影！只有他能讓這瘋子徹底斷氣！！」' },
    { type: 'chapter', text: '第八章：金箔下的心跳 —— 完結' },
    {
        type: 'ledger',
        title: '[ 帳本紀錄：第八章 · 金箔下的心跳 ]',
        item: '肉身佛主動脈切除與指示',
        target: '肉身佛（敖羅）與 魏天縱',
        detail: '白磷烈火燒斷紅線，止血鉗刺入心臟主動脈。魏天縱留在神台同歸於盡。',
        note: '指示尋找「穿嫁衣的顧影」。解開百年相思詛咒的關鍵祭品。',
        nextAction: () => startGame('ch9')
    }
];

const chapter9Script = [
    { type: 'bgm', src: BGM_COURTYARD, title: '寒院履聲' },
    { type: 'v8hud', active: true },
    { type: 'tint', color: 'normal' },
    { type: 'chapter', text: '第九章：紙做的牢籠' },
    { speaker: '系統', text: '[ 影音檔案編號：199X-07-16_03:15 ]<br>衝進後院【鎖春】宅院。滿地紫色曼陀羅毒花，空氣清新無紅線。' },
    { speaker: '系統', text: '推開雕花木門。架子床上端坐著一具風乾金髮、身穿大紅嫁衣的乾屍（顧影），手心緊攥著一把柳葉手術刀。' },
    { speaker: '林恩', text: '「顧影……百年前被當作嫁衣祭品鎖在此處的少年。」' },
    { speaker: '系統', text: '將柳葉刀與喬若楠的水仙花結合，整座歲神舊宅的紅線徹底崩塌化為灰燼！何翠身上的紙殼脫落變回活人：「蘇澈哥哥，若楠哥哥的戲唱完了嗎？」' },
    { speaker: '系統', text: '村口石牌坊晨曦中，李客雙腳落地，將派克鋼筆放在石獅子上，標準敬禮鞠躬：「李客，民國九年醫科生，實習完畢。」（化作金光超生）' },
    { type: 'chapter', text: '第九章：紙做的牢籠 —— 完結' },
    {
        type: 'ledger',
        title: '[ 帳本紀錄：第九章 · 紙做的牢籠 ]',
        item: '百年相思破鎖與全隊救出',
        target: '顧影（金髮嫁衣乾屍）與 劇團全員',
        detail: '何翠脫落紙殼復原，李客於晨曦中完成實習化光超生。歲神迷霧徹底消散。',
        note: '相思若有毒，唯解在人心。這筆遠古委託終告一段落。',
        nextAction: () => startGame('epi')
    }
];

const epilogueScript = [
    { type: 'bgm', src: BGM_COURTYARD, title: '寒院履聲' },
    { type: 'v8hud', active: false },
    { type: 'tint', color: 'normal' },
    { type: 'chapter', text: '尾聲：帳本的最後一頁' },
    { speaker: '系統', text: '三天後。城內醫院。' },
    { speaker: '穆滿', text: '（遞過一張數額巨大的支票）「林先生，這是剩餘尾款與精神損失費。多虧了你們，我二哥（喬若楠）才能平安回來。」' },
    { speaker: '蘇澈', text: '「若楠醒了一次，問我有沒有看到一把柳葉刀，說那是別人送他的定情信物……」' },
    { speaker: '裴得', text: '（頭纏繃帶醒來，摸摸下巴）「奇怪……我總覺得我好像學會了德語？剛才看電視能聽懂德國佬罵人。」' },
    { speaker: '林恩', text: '摸了摸口袋裡那支生鏽的派克鋼筆。「比起神，我更相信拿著刀的人。」' },
    { type: 'triggerEnding', ending: 'true' }
];
