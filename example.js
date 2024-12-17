const sectDetails = {
    gaebang: {
        name: "개방",
        hanja: "丐幇",
        martialArts: "타구봉법, 항룡십팔장, 취권 등",
        Quality: "중원의 거지들은 거의 다 개방의 식구이기 때문에 머릿수가 많고, 그 인원을 활용하여 정파에서 정보수집에서 가장 뛰어난 집단으로 묘사되는 경우가 많다. 허리띠의 매듭 수나 옷에 덧대어 기운 천의 숫자, 메고 다니는 마대(麻袋)의 매듭 수에 따라 신분고하를 구분한다. 기본적으로 새로운 방도를 백의개(白衣丐)라 부르며 일결(一結), 이결(二結) 순으로 구결(九結)까지 나눈다.",
        books: [
            { title: "걸인각성", url: "https://page.kakao.com/content/60164674" },
        ]
       
    },

    sorim: {
        name: "소림",
        hanja: "少林寺",
        martialArts: "백팔나한진, 여래신장, 소림 칠십이예 등",
        Quality: "구파일방에서 거두를 차지하는 스님들의 문파. 남성들만 입문할 수 있다.",
        books: ["-"],
       
    },

    mudang: {
        name: "무당",
        hanja: "武當派",
        martialArts: "태극검, 태극혜검, 양의신공 등",
        Quality: "중국 호북성 균현 무당산을 근거로 삼는 문파. 도가 문파로 검법이 특히 유명하다.",
        books: [
            { title: "무당마검", url: "https://ridibooks.com/books/875010004?srsltid=AfmBOoqbikxcVcbsgFpRYlksEo8L2y0E3sCdkpv3E2S2Bk5PmKKjPaSP" },
            { title: "무당기협", url: "https://page.kakao.com/content/52882308" },
        ],
      
    },

    hwasan: {
        name: "화산",
        hanja: "華山派",
        martialArts: "이십사수매화검법, 자하신공, 육합검법 등",
        Quality: "오악검파 및 구파일방 중 하나. 섬서성 화음현의 화산에 위치해있다. 천하제일검문, 천하제일도문을 두고 무당과 경쟁하는 경우가 많다 ",
        books: [ 
            { title: "화산귀환", url: "https://series.naver.com/novel/detail.series?productNo=4130558" },
            { title: "화산전생", url: "https://page.kakao.com/content/49147864" },
        ],
       
    },

    namgung: {
        name: "남궁세가",
        hanja: "南宮世家",
        martialArts: "창궁무애검법, 제왕검형 등",
        Quality: "검을 사용하는 엘리트 명가. 많은 무협소설에서 남궁세가가 무림맹을 영도하거나 남궁 성씨를 가진 인물이 무림맹주일 때가 많다.",
        books: [ 
            { title: "남궁세가 막내공자", url: "https://page.kakao.com/content/53769251" },
            { title: "남궁세가 소공자", url: "https://series.naver.com/novel/detail.series?productNo=3267921" },
        ],
        
    },

    dangga: {
        name: "사천당문",
        hanja: "四川唐門",
        martialArts: "각종 독술, 만천화우 등",
        Quality: "암기와 독을 전문적으로 다루는 가문으로 의약, 야금술에도 조예가 깊다. 은원관계의 청산이 확실하며 폐쇄적이다. ",
        books: [ 
            { title: "사천당가의 시비로 살아남기", url: "https://page.kakao.com/content/60903181" },
            { title: "사천당문 리마스터", url: "https://page.kakao.com/content/62091364?tab_type=about" },
        ],
       
    },

    jaegal: {
        name: "제갈세가",
        hanja: "諸葛世家",
        martialArts: "현원전단신공, 응혈신조, 백운만락선 등",
        Quality: "무공의 수의는 낮지만 기예, 기관, 전술, 지략이 뛰어난 가문으로 묘사된다. 대대로 두뇌가 총명한 후손이 많이 나온다.",
        books: [ 
            { title: "의원, 다시 살다", url: "https://page.kakao.com/content/55806263" },
        ],
       
    },

    nokrim: {
        name: "녹림",
        hanja: "綠林",
        martialArts: "녹림 삼십이절예, 천풍부법 등",
        Quality:  "산적, 혹은 도적으로 하나하나의 세력은 약하지만 녹림칠십이채 등의 연합체로 나오는 경우가 많다. ",
        books: [ 
            { title: "녹림대제전", url: "https://page.kakao.com/content/47389455" },
            { title: "산적왕이 되고 싶다곤 안 했다", url: "https://ridibooks.com/books/5677000001?_s=search&_q=%EC%82%B0%EC%A0%81%EC%99%95%EC%9D%B4&_rdt_sid=SearchBookList" },
        ],
       
    },

    jangkang: {
        name: "장강수로채",
        hanja: "長江水路寨",
        martialArts: "-",
        Quality:  "양쯔강(장강)을 주 활동 구역으로 삼는 수적 단체",
        books: [ 
            { title: "장강수로채", url: "https://series.naver.com/novel/detail.series?productNo=1418796" },
        ],
       
    },

    haomun: {
        name: "하오문",
        hanja: "下汚門",
        martialArts: "-",
        Quality:  "정보력과 생존력이 강하다. 점조직으로 대다수의 구성원들이 각종 도둑 · 소매치기 · 도박사 · 기녀 · 마부 · 점소이 등으로 흔히 묘사된다. ",
        books: [ 
            { title: "광마회귀", url: "https://series.naver.com/novel/detail.series?productNo=4892207" },
        ],
       
    },

    magyo: {
        name: "천마신교",
        hanja: "天魔神敎",
        martialArts: "흡성대법, 천마신공, 자전마공 등 ",
        Quality:  "십만대산을 근거지로 하며 마신 또는 천마를 숭배하거나 마공을 익힌 이들이 모인 일종의 문파이다. 마교는 간악하고 피에 미친 존재로 묘사되곤 했으나, 현 시점에서 마교는 강자존이라는 문화로 자리매김한 힘을 극한으로 추구하는 극단적인 문파로 자주 표현되곤 한다.",
        books: [ 
            { title: "마도전생기", url: "https://series.naver.com/novel/detail.series?productNo=4871293" },
            { title: "나노마신", url: "https://series.naver.com/novel/detail.series?productNo=2987014" },
        ],
       
    },

    gumgun: {
        name: "금군",
        hanja: "禁軍",
        martialArts: "-",
        Quality:  "관군 중에서 조정과 임금을 지키는 친위대, 근위대를 일컫는다. 무협지의 관무불가침 특성상 등장이 극히 드물다. ",
        books: [ 
            { title: "-", url: "" },
        ],
       
    },

    namman: {
        name: "남만야수궁, 남만태양궁",
        hanja: "南蠻野獸宮 / 南蠻太陽宮",
        martialArts: " -",
        Quality:  "중원 남쪽의 새외무림으로 주로 야수, 맹수들을 다루거나 주술이나 독을 다루는 문파로 등장한다.",
        books: [ 
            { title: "-", url: "" },
        ],
    },

    bing: {
        name: "북해빙궁",
        hanja: "北海氷宮",
        martialArts: "북해빙검, 빙천수라마공, 설풍보법 등 ",
        Quality:  " 중원 북쪽의 새외무림으로 주로 냉기를 일으키는 류의 무공을 쓴다. 날씨가 춥기 때문인지 얼음이나 눈, 추위, 차가움에 관련된 성씨가 압도적으로 많다.",
        books: [ 
            { title: "북해빙궁", url: "https://ridibooks.com/books/120001911?srsltid=AfmBOoprA15eY0ohhkv67hAzlylMesP0qE5gYiCXEchJ_TktUAQKSNP_" },
        ],
      
    },

    pyoguk: {
        name: "표국",
        hanja: "鏢局",
        martialArts: " ",
        Quality:  "수레를 이용한 육로운송업에 종사한다. 돈을 받고 물건을 안전하게 이송해주거나, 사람을 보호해주는 역할을 한다. ",
        books: [ 
            { title: "표국천하", url: "https://page.kakao.com/content/48297736" },
            {title: "환생표사", url:"https://ridibooks.com/books/2057073250"}
        ],
        
    },

    example: {
        name: " ",
        hanja: "",
        martialArts: " ",
        Quality:  " ",
        books: [ 
            { title: "", url: "" },
        ],
       
    }
};


document.addEventListener('DOMContentLoaded', function () {
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.forEach(function (popoverTriggerEl) {
        new bootstrap.Popover(popoverTriggerEl);
    });
});

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function openModal(sect) {
    console.log("openModal 호출:", sect);
    const data = sectDetails[sect];
    if (data) {
        document.getElementById("sectModalLabel").textContent = data.name;
        document.getElementById("sectHanja").textContent = data.hanja;
        // document.getElementById("sectLogo").src = data.logo;
        document.getElementById("sectName").textContent = data.name;
        document.getElementById("sectQuality").textContent = data.Quality;
        document.getElementById("sectMartialArts").textContent = data.martialArts;

        const bookList = document.getElementById("sectBooks");
        bookList.innerHTML = ""; // 기존 내용 제거
        data.books.forEach(book => {
            const li = document.createElement("li");
            li.innerHTML = `<a href="${book.url}" target="_blank">${book.title}</a>`;
            bookList.appendChild(li);
        });

        const modalElement = document.getElementById("sectModal");
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
    } else {
        console.log("해당 문파가 없습니다:", sect);
    }
}
