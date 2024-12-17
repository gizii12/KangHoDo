const terms = [
    { term: "가검술", description: "검술의 기본." },
    { term: "내공", description: "기를 신체 내부에 축적하는 기술. 무공의 형태로 기를 방출하거나 흡수할 수도 있다. (유의어 - 내력, 내기, 내가기공)" },
    { term: "단전", description: "기를 인체에 저장하는 장소로, 내공을 쌓는 기반이 된다." },
    { term: "갑자", description: "내공의 양을 표현할 때 n갑자를 적공한 내공이라 부른다. (1갑자는 60년)" },
    { term: "무공", description: "무협소설에 묘사되는 무협 기술등을 일컫는다." },
    { term: "검기", description: "단전에 축적한 내공을 신체나 병장기를 매개체로 밀어넣어 눈에 보일 정도로 기를 발산하는 것. " },
    { term: "선천진기", description: "내공의 일종으로 태어날 때부터 가지고 있던 진기이다. 인간의 근원적 생명력." },
    { term: "환골탈태", description: "높은 경지의 고수가 많은 내공과 깨달음을 얻어 몸 자체가 무공을 익히기 적합한 육체로 변하는 과정." },
    { term: "동귀어진", description: "상대방과 같이 죽음으로써 목숨을 다하는 무공. " },
    { term: "내공심법", description: "내공을 운용하고 쌓는 방법" },
    { term: "주화입마", description: "몸 안에 도는 기를 통제하지 못해 내공이 역류하거나 폭주하는 현상" },
    { term: "운기조식", description: "자신이 익힌 내공심법ㅇ 따라 내력을 몸속에서 순환시키는 것" },
    { term: "천근추", description: "기를 이용해 몸무게를 무겁게 하는 무공" },
    { term: "어검술", description: "손에서 떨어진 검이 홀로 자유자재로 움지여 적을 공격하는 기술 또는 경지" },
    { term: "음공", description: "소리를 매개로 삼는 무공" },
    { term: "외공", description: "내공과 반대되는 개념. 외적인 수련을 가리킨다." },
    { term: "금강불괴", description: "외공이 최고의 경지에 이르러 몸이 금강석(다이아몬드)처럼 단단해지는 경지" },
    { term: "권법", description: "맨손무예를 통칭하는 단어. " },
    { term: "보법", description: "기술을 펼칠 때 발의 움직임을 뜻한다." },
    { term: "허공답보", description: "아무것도 없는 허공을 걷거나 달리는 기술 또는 극의" },
    { term: "점혈", description: "인체에 있는 특정한 혈도나 경락을 짚어 적을 공격 혹은 고문하거나 무력화하는 기술의 통칭" },
    { term: "비급", description: "무공이 적혀있는 물건." },
    { term: "영물", description: "영험한 기운과 능력을 가진 동물이나 식물." },
    { term: "인피면구", description: "인간의 얼굴 가죽을 가공해 만든 가면, 혹은 인간의 얼굴과 매우 흡사하게 만든 가면. " },
    { term: "야명주", description: "어두운 곳에서 스스로 빛을 내는 구슬" },
    { term: "무림맹", description: "정파들의 연합 조직으로 무림에서 일어나는 각종 분쟁을 조율하고 사파의 활동을 제약하는 것이 조직의 주 목적이다." },
    { term: "금창약", description: "외상에 쓰이는 가루약. 상처에 뿌려서 사용한다." },
    { term: "벽곡단", description: "벽곡수현(단식수련) 기간중에 몸을 유지하기 위해 먹는 일시적인 대체식품" },
    { term: "용봉지회", description: "정파에서 주관하는 무술대회. 나이가 어린 후기지수의 무인들이 참여하며, 각 문파의 신인 및 기대받는 제자들을 내보이는 자리이다." },
    { term: "절맥증", description: "가공의 질병으로 선척적인 난치병이다." },
    { term: "점소이", description: "여관, 식당, 찻집, 술집 등에서 손님을 응대하는 종업원을 뜻하는 명칭" },
    { term: "후기지수", description: "후배 중의 뛰어난 인물을 이르는 사자성어." },
    { term: "히 - 예시", description: "예시 문항입니다" },
    { term: "히 - 예시", description: "예시 문항입니다" },
    { term: "히 - 예시", description: "예시 문항입니다" },
    { term: "히 - 예시", description: "예시 문항입니다" },
    { term: "히 - 예시", description: "예시 문항입니다" },
    { term: "히 - 예시", description: "예시 문항입니다" },
    { term: "히 - 예시", description: "예시 문항입니다" },
    { term: "히 - 예시", description: "예시 문항입니다" },
    { term: "히 - 예시", description: "예시 문항입니다" },
    { term: "히 - 예시", description: "예시 문항입니다" },
    { term: "히 - 예시", description: "예시 문항입니다" },
    { term: "히 - 예시", description: "예시 문항입니다" },
    { term: "히 - 예시", description: "예시 문항입니다" },
    { term: "히 - 예시", description: "예시 문항입니다" },
    { term: "히 - 예시", description: "예시 문항입니다" },
    { term: "히 - 예시", description: "예시 문항입니다" },
    { term: "히 - 예시", description: "예시 문항입니다" },
    





    // 더 많은 용어 추가 가능
];

const termsPerPage = 15; // 페이지당 항목 수
let currentPage = 1; // 현재 페이지

const termsContainer = document.getElementById("termsContainer");
const termsList = document.getElementById("termsList");
const searchInput = document.getElementById("searchInput");
const pagination = document.getElementById("pagination");
const termsTableBody = document.getElementById("termsTableBody");

// 용어 리스트를 ㄱㄴㄷ 순으로 정렬
function sortTermsByKorean(terms) {
    return terms.sort((a, b) => a.term.localeCompare(b.term, "ko"));
}

// 필터링 및 렌더링
function renderTerms(filteredTerms = terms) {
    termsTableBody.innerHTML = ""; // 기존 테이블 내용 제거

    // 한글 순서로 정렬
    const sortedTerms = sortTermsByKorean(filteredTerms);

    // 페이지네이션 범위 계산
    const start = (currentPage - 1) * termsPerPage;
    const end = currentPage * termsPerPage;
    const paginatedTerms = sortedTerms.slice(start, end);

    // 테이블 행 생성
    paginatedTerms.forEach(({ term, description }) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><strong>${term}</strong></td>
            <td>${description}</td>
        `;
        termsTableBody.appendChild(row);
    });
}

// 페이지네이션 버튼 생성
function renderPagination(filteredTerms = terms) {
    pagination.innerHTML = "";
    const pageCount = Math.ceil(filteredTerms.length / termsPerPage);

    for (let i = 1; i <= pageCount; i++) {
        const button = document.createElement("button");
        button.textContent = i;
        button.classList.add("page-button");
        if (i === currentPage) button.classList.add("active");
        button.addEventListener("click", () => {
            currentPage = i;
            renderTerms(filteredTerms);
            renderPagination(filteredTerms);
        });
        pagination.appendChild(button);
    }
}

// 검색 기능
function handleSearch() {
    const query = searchInput.value.toLowerCase();
    const filteredTerms = terms.filter(({ term }) =>
        term.toLowerCase().includes(query)
    );
    currentPage = 1; // 검색 시 첫 페이지로 이동
    renderTerms(filteredTerms);
    renderPagination(filteredTerms);
}

// 검색 이벤트
searchInput.addEventListener("input", handleSearch);

// 초기 렌더링
renderTerms();
renderPagination();
