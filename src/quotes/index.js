const QUOTES = [
    {
        quotes: ["Một xu tiết kiệm là một xu kiếm được."],
        author: "Benjamin Franklin",
    },
    {
        quotes: [
            "Hãy cẩn thận với những chi phí nhỏ,",
            "Một lỗ rò bé có thể làm đắm cả con tàu.",
        ],
        author: "Benjamin Franklin",
    },
    {
        quotes: [
            "Người ta giàu vì biết lao động",
            "Giàu hơn nữa vì biết tiết kiệm chi tiêu.",
        ],
        author: "Ngạn ngữ Thổ Nhĩ Kỳ",
    },
    {
        quotes: ["Tiết kiệm là một nghệ thuật,", "lớn hơn cả việc kiếm tiền."],
        author: "Ngạn ngữ Đức",
    },
    {
        quotes: [
            "Kiếm nhiều hết sức có thể",
            "Kiếm nhiều hết sức có thể",
            "Đầu tư nhiều hết sức có thể",
            "Cho đi nhiều hết sức có thể",
        ],
        author: "John Wesley",
    },
    {
        quotes: [
            "Đừng tiết kiệm những gì còn lại sau khi chi tiêu,",
            "mà hãy tiêu những gì còn lại sau tiết kiệm.",
        ],
        author: "Warrant Buffett",
    },
    {
        quotes: [
            "Để dành một khoản tiền nhỏ vào mỗi tháng",
            "và đến cuối năm bạn sẽ vô cùng ngạc nhiên",
            "bởi số tiền bạn dành dụm được ít ỏi làm sao.",
        ],
        author: "Ernest Haskins",
    },
    {
        quotes: [
            "Hãy tiết kiệm 1/3 thu nhập, chi tiêu 1/3 và 1/3 còn lại dành để làm từ thiện.",
        ],
        author: "Angelina Jolie",
    },
    {
        quotes: [
            "Không cho bạn mượn tiền có thể mất bạn",
            "nhưng cho bạn mượn tiền có thể mất bạn, mất luôn cả tiền.",
        ],
        author: "",
    },
    {
        quotes: [
            "“Cho” thì tốt hơn là “cho mượn”, nhất là khi chúng tốn kém gần như nhau.",
        ],
        author: "Philip Gibbs",
    },
    {
        quotes: [
            "Khi đòi lại tiền đã cho vay,",
            "bạn thường khám phá ra rằng mình đã biến một người bạn tốt trở thành kẻ thù.",
        ],
        author: "Plaute",
    },
    {
        quotes: [
            "Thông cảm nỗi khổ của bạn là tốt mà ra tay tiếp cứu họ còn hay hơn.",
        ],
        author: "Voltaire",
    },
    {
        quotes: [
            "Người cho bạn mượn tiền không phải là người thừa tiền.",
            "Người sẵn sàng cho bạn vay tiền, là quý nhân của bạn.",
            "Không những cho bạn vay tiền, mà còn không cần đặt ra điều kiện gì cho bạn,",
            "chắc chắn là quý nhân trong các quý nhân.",
        ],
        author: "",
    },
    {
        quotes: [
            "Con người thường bán thời gian để kiếm tiền rồi lại dùng tiền để giết thời gian.",
        ],
        author: "",
    },
    {
        quotes: [
            "Nếu bạn sinh ra trong nghèo khó, đó không phải là lỗi của bạn,",
            "nhưng nếu bạn chết đi trong nghèo khó, đó chính là lỗi của bạn.",
        ],
        author: "Bill Gates",
    },
    {
        quotes: [
            "Nếu bạn mua những thứ mà mình không cần tới,",
            "sớm muộn gì bạn cũng phải bán đi những thứ mình cần.",
        ],
        author: "Warren Buffett",
    },
    {
        quotes: [
            "Nếu không thể tìm được cách kiếm ra tiền ngay cả khi mình đang ngủ,",
            "rất có thể bạn sẽ phải làm việc cho đến hết đời.",
        ],
        author: "Warren Buffett",
    },
    {
        quotes: [
            "Người nghèo cũng thèm tiền. Người giàu cũng thèm tiền.",
            "Chỉ người anh minh mới thèm hạnh phúc.",
        ],
        author: "",
    },
    {
        quotes: ["Không bao giờ được tiêu nhiều hơn số tiền bạn có."],
        author: "",
    },
    {
        quotes: [
            "Đồng tiền không làm thay đổi bản chất của con người,",
            "nó chỉ làm bản chất con người được bộc lộ rõ hơn.",
        ],
        author: "",
    },
    {
        quotes: [
            "Người giàu không làm việc vì tiền, người giàu làm việc vì cơ hội.",
        ],
        author: "",
    },
    {
        quotes: [
            "Giá trị của đồng tiền nằm ở cách tiêu.",
            "Giá trị của con người nằm ở cách yêu và cách sống.",
        ],
        author: "",
    },
    {
        quotes: [
            "Nếu bạn muốn giàu có thì chẳng những phải học cách làm ra tiền",
            "mà còn phải học cách sử dụng đồng tiền.",
        ],
        author: "Franklin",
    },
    {
        quotes: [
            "Tiền không mua được hạnh phúc chẳng phải vì tiền không có đủ sức mạnh",
            "mà là vì không ai bán hạnh phúc.",
        ],
        author: "",
    },
    {
        quotes: [
            "Một người thông minh nên giữ tiền trong đầu chứ không phải trong tim.",
        ],
        author: "Jonathan Swift",
    },
    {
        quotes: ["Đừng bao giờ tiêu tiền trước khi bạn có nó."],
        author: "Thomas Jefferson",
    },
    {
        quotes: [
            "“Khi chúng ta làm điều mình đam mê, tiền bạc sẽ tự tìm đến, các cánh cửa khác sẽ mở ra.",
            "Chúng ta cảm thấy bản thân trở nên hữu ích và công việc sẽ như một trò chơi vậy.”",
        ],
        author: "Julia Cameron",
    },
    {
        quotes: [
            "“Tiền là một người chủ tồi tệ nhưng lại là kẻ đầy tớ xuất sắc.”",
        ],
        author: "Phineas Taylor Barnum",
    },
    {
        quotes: ["“Sự đầu tư vào kiến thức mới mang lại lãi suất cao nhất.”"],
        author: "Benjamin Franklin",
    },
    {
        quotes: [
            "Người nào nói rằng tiền không mua được hạnh phúc rõ là không biết đi shopping ở đâu.",
        ],
        author: "Bo Derek",
    },
    {
        quotes: [
            "Nếu bạn muốn biết giá trị của tiền, hãy thử đi vay một ít xem.",
        ],
        author: "Benjamin Franklin",
    },
    {
        quotes: [
            "“Quá nhiều người đang sử dụng đồng tiền của mình để mua những thứ họ không muốn",
            "và để gây ấn tượng với những kẻ họ chẳng ưa.”",
        ],
        author: "Will Rogers",
    },
    {
        quotes: [
            "“Bạn phải làm chủ được tiền của mình,",
            "bằng không tình cảnh thiếu thốn sẽ mãi mãi kiểm soát bạn.”",
        ],
        author: "Dave Ramsey",
    },
    {
        quotes: [
            "“Hãy nhớ rằng một người có thể kiếm tiền",
            "nhưng chỉ người tài năng thực sự mới biết cách sử dụng chúng.”",
        ],
        author: "Candace Bushnell",
    },
    {
        quotes: [
            "Thời gian quý giá hơn tiền bạc.",
            "Bạn có thể kiếm được nhiều tiền hơn,",
            "nhưng bạn không thể có thêm được thời gian.",
        ],
        author: "Jim Rohn",
    },
    {
        quotes: [
            "Mất tiền là mất mát lớn;",
            "Mất bạn lại là mất mát lớn hơn nữa;",
            "Mất niềm tin là mất hết.",
        ],
        author: "Eleanor Roosevelt",
    },
    {
        quotes: [
            "Khi có nhiều tiền người ta khao khát tình yêu chân thật,",
            "khi chân thành yêu mãi mà vẫn đói, người ta khao khát tiền.",
        ],
        author: "",
    },
    {
        quotes: [
            "Tiền bạc cũng như đàn bà: muốn giữ nó thì phải săn sóc nó,",
            "bằng không nó đi tạo hạnh phúc cho người khác.",
        ],
        author: "E. Bourdet",
    },
    {
        quotes: [
            "Tiền bạc chưa bao giờ và sẽ không bao giờ khiến con người hạnh phúc,",
            "trong bản chất nó không có gì có thể tạo ra hạnh phúc.",
            "Một người càng có nó nhiều bao nhiêu càng muốn nó nhiều bấy nhiêu.",
        ],
        author: "",
    },
    {
        quotes: [
            "Khi một nghệ sĩ hay một tác giả khoe rằng mình đã kiếm được tiền,",
            "vô tình họ báo cho ta biết họ đang đổi nghề.",
        ],
        author: "",
    },
    {
        quotes: [
            "Tôi không cần tiền, tôi chỉ cần tình yêu…",
            "Nhưng không có tiền, tình yêu của tôi sẽ chết!",
        ],
        author: "",
    },
    {
        quotes: ["Tình yêu làm được một cái gì đấy. Tiền bạc làm được tất cả."],
        author: "",
    },
    {
        quotes: [
            "“Nếu được chọn giữa tiền và sự quyến rũ, hãy chọn tiền.",
            "Khi bạn già đi, tiền sẽ trở thành nét quyến rũ của bạn.”",
        ],
        author: "Katharine Hepburn",
    },
    {
        quotes: [
            "Người ta nói tình yêu quan trọng hơn tiền bạc,",
            "nhưng bạn đã bao giờ thử thanh toán hóa đơn với một cái ôm chưa?",
        ],
        author: "",
    },
    {
        quotes: ["Đồng tiền đi trước là đồng tiền khôn."],
        author: "",
    },
    {
        quotes: ["Vay mượn cũng chẳng tốt hơn ăn mày là bao."],
        author: "Lessing",
    },
    {
        quotes: ["Có một thứ tiền không thể mua được. Đó là sự nghèo khó."],
        author: "",
    },
    {
        quotes: ["Nếu bạn phải hỏi giá, bạn không có khả năng thanh toán đâu."],
        author: "J.P. Morgan",
    },
    {
        quotes: [
            "Đừng kết hôn vì tiền. Bạn có thể vay với giá rẻ hơn nhiều mà.",
        ],
        author: "Scotts Proverb",
    },
    {
        quotes: [
            "Nếu phụ nữ không tồn tại, tất cả tiền bạc trên thế giới này đều trở nên vô nghĩa",
        ],
        author: "Aristotle Onassis",
    },
    {
        quotes: ["Tiền bạc không phải là tất cả. Vì còn có vàng và kim cương."],
        author: "",
    },
    {
        quotes: [
            "Tiền không thể mua được hạnh phúc, nhưng nó lại giúp cho sự đau khổ trở nên dễ chịu hơn.",
        ],
        author: "Helen Gurley Brown",
    },
    {
        quotes: [
            "Nếu phân mà là thứ đáng giá thì chắc là người nghèo đã được sinh ra không có hậu môn.",
        ],
        author: "Henry Miller",
    },
    {
        quotes: ["Hạnh phúc để làm gì cơ chứ? Nó có mua được tiền đâu."],
        author: "Henry Youngman",
    },
    {
        quotes: [
            "Hãy cho tôi một cơ hội để chứng minh là tiền không mua được hạnh phúc.",
        ],
        author: "Pike Milligan",
    },
    {
        quotes: ["Nếu tiền không làm bạn hạnh phúc thì hãy đưa nó cho tôi."],
        author: "",
    },
    {
        quotes: [
            "Người giàu nhất là người tiết kiệm. Người nghèo nhất là người hà tiện.",
        ],
        author: "",
    },
    {
        quotes: [
            "Những người sống đúng với khả năng tài chính của mình là những người không có trí tưởng tượng.",
        ],
        author: "Oscar Wilde",
    },
];

export default QUOTES[Math.floor(Math.random() * QUOTES.length)];
