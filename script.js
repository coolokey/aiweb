// 祝福語資料庫
const wishes = {
    family: [
        "願新的一年裡，全家人身體健康，幸福美滿！",
        "祝願家人新年快樂，萬事如意，闔家歡樂！",
        "願我們的家庭在新的一年裡幸福安康，和睦美滿！",
        "祝願家人在新的一年裡事業有成，心想事成！",
        "願我們的家庭在龍年裡龍騰虎躍，蒸蒸日上！"
    ],
    friend: [
        "祝你新年快樂，事業騰飛，愛情甜蜜！",
        "願你在新的一年裡心想事成，好運連連！",
        "祝你龍年大吉大利，財運亨通！",
        "願你新的一年平安喜樂，夢想成真！",
        "祝你在新的一年裡幸福美滿，前程似錦！"
    ],
    business: [
        "祝願貴公司在新的一年裡業務蒸蒸日上！",
        "願我們的合作在新的一年裡更上一層樓！",
        "祝願您新年生意興隆，財源廣進！",
        "願您在龍年裡事業騰飛，再創佳績！",
        "祝願您新春大吉，生意興隆，財運亨通！"
    ],
    humor: [
        "新年到，祝你錢包鼓鼓，煩惱走走！",
        "願你在新的一年裡像龍一樣威風，像虎一樣強壯！",
        "祝你新年發財發到手軟，開心到合不攏嘴！",
        "願你新的一年裡薪水漲得比物價還快！",
        "祝你龍年行大運，不用努力也能贏！"
    ]
};

// 節日資料
const festivals = {
    spring: {
        name: "春節",
        date: () => {
            const now = new Date();
            // 2024年春節是2月10日
            const springFestival = new Date(2024, 1, 10);
            if (now > springFestival) {
                return new Date(2025, 1, 29); // 2025年春節
            }
            return springFestival;
        },
        wishes: {
            family: [
                "願新的一年裡，全家人身體健康，幸福美滿！",
                "祝願家人新年快樂，萬事如意，闔家歡樂！",
                "願我們的家庭在新的一年裡幸福安康，和睦美滿！",
                "祝願家人在新的一年裡事業有成，心想事成！",
                "願我們的家庭在龍年裡龍騰虎躍，蒸蒸日上！"
            ],
            friend: [
                "祝你新年快樂，事業騰飛，愛情甜蜜！",
                "願你在新的一年裡心想事成，好運連連！",
                "祝你龍年大吉大利，財運亨通！",
                "願你新的一年平安喜樂，夢想成真！",
                "祝你在新的一年裡幸福美滿，前程似錦！"
            ],
            business: [
                "祝願貴公司在新的一年裡業務蒸蒸日上！",
                "願我們的合作在新的一年裡更上一層樓！",
                "祝願您新年生意興隆，財源廣進！",
                "願您在龍年裡事業騰飛，再創佳績！",
                "祝願您新春大吉，生意興隆，財運亨通！"
            ],
            humor: [
                "新年到，祝你錢包鼓鼓，煩惱走走！",
                "願你在新的一年裡像龍一樣威風，像虎一樣強壯！",
                "祝你新年發財發到手軟，開心到合不攏嘴！",
                "願你新的一年裡薪水漲得比物價還快！",
                "祝你龍年行大運，不用努力也能贏！"
            ]
        }
    },
    lantern: {
        name: "元宵節",
        date: () => {
            const now = new Date();
            // 農曆正月十五
            const lanternFestival = new Date(2024, 1, 24); // 2024年2月24日
            if (now > lanternFestival) {
                return new Date(2025, 2, 13); // 2025年3月13日
            }
            return lanternFestival;
        },
        wishes: {
            family: [
                "祝願全家元宵節快樂，團圓美滿！",
                "願家人元宵佳節愉快，幸福安康！",
                "祝願闔家歡樂，元宵節快樂！",
                "願我們的家庭和樂融融！",
                "祝願家人元宵節快樂，甜甜蜜蜜！"
            ],
            friend: [
                "祝你元宵節快樂，心想事成！",
                "願你佳節愉快，好運連連！",
                "祝你元宵節快樂，幸福滿滿！",
                "願你平安喜樂，夢想成真！",
                "祝你元宵佳節愉快，萬事如意！"
            ],
            business: [
                "祝願貴公司元宵節愉快，業務蒸蒸日上！",
                "願我們的合作更上一層樓！",
                "祝願您元宵節快樂，生意興隆！",
                "願您佳節愉快，事業有成！",
                "祝願您元宵節快樂，財源廣進！"
            ],
            humor: [
                "元宵節到，吃湯圓，好運來報到！",
                "祝你圓圓滿滿，甜甜蜜蜜！",
                "湯圓要吃，開心要記！",
                "願你元宵節快樂，煩惱都趕跑！",
                "湯圓圓，心也甜，祝你元宵笑開顏！"
            ]
        }
    },
    qingming: {
        name: "清明節",
        date: () => {
            const now = new Date();
            const qingming = new Date(2024, 3, 4); // 2024年4月4日
            if (now > qingming) {
                return new Date(2025, 3, 4); // 2025年4月4日
            }
            return qingming;
        },
        wishes: {
            family: [
                "願先人安息，後代平安！",
                "緬懷先人，珍惜當下！",
                "慎終追遠，感恩先人！",
                "飲水思源，慎終追遠！",
                "祭祖敬祖，傳承美德！"
            ],
            friend: [
                "願你平安喜樂，幸福安康！",
                "祝願家族和睦，後代興旺！",
                "願你闔家平安，萬事如意！",
                "祝願家族興旺，子孫滿堂！",
                "願你平安健康，心想事成！"
            ],
            business: [
                "祝願您清明節安康！",
                "願您事業蒸蒸日上！",
                "祝願您萬事如意！",
                "願您平安喜樂！",
                "祝願您事事順心！"
            ],
            humor: [
                "清明時節雨紛紛，記得帶傘別感冒！",
                "踏青賞花好時節，別忘了防曬！",
                "春遊踏青正當時，記得帶上零食！",
                "清明時節好時光，記得拍照留念！",
                "春光明媚好時節，一起去踏青！"
            ]
        }
    },
    labor: {
        name: "勞動節",
        date: () => {
            const now = new Date();
            const year = now.getFullYear();
            const laborDay = new Date(year, 4, 1); // 5月1日
            if (now > laborDay) {
                return new Date(year + 1, 4, 1);
            }
            return laborDay;
        },
        wishes: {
            family: [
                "祝所有勞動者節日快樂！",
                "願大家工作順心，身體健康！",
                "感謝所有勞動者的付出！",
                "祝願所有勞動者幸福安康！",
                "願所有勞動者快樂幸福！"
            ],
            friend: [
                "祝你勞動節快樂，工作順心！",
                "願你工作愉快，薪水上漲！",
                "祝你事業有成，前程似錦！",
                "願你工作順利，生活愜意！",
                "祝你勞動節快樂，心想事成！"
            ],
            business: [
                "祝願全體員工勞動節快樂！",
                "感謝大家的辛勤付出！",
                "願所有員工身體健康，工作愉快！",
                "祝願大家工作順心，事業有成！",
                "感謝各位的努力與貢獻！"
            ],
            humor: [
                "勞動最光榮，放假更快樂！",
                "工作要快樂，加薪更開心！",
                "辛勤工作，開心放假！",
                "勞動節快樂，加薪更快樂！",
                "工作辛苦了，該放假啦！"
            ]
        }
    },
    children: {
        name: "兒童節",
        date: () => {
            const now = new Date();
            const year = now.getFullYear();
            const childrenDay = new Date(year, 3, 4); // 4月4日
            if (now > childrenDay) {
                return new Date(year + 1, 3, 4);
            }
            return childrenDay;
        },
        wishes: {
            family: [
                "祝小朋友們兒童節快樂！",
                "願孩子們健康成長，快樂每一天！",
                "祝所有孩子童年美好！",
                "願孩子們擁有快樂童年！",
                "祝小朋友們開心快樂！"
            ],
            friend: [
                "祝你的孩子兒童節快樂！",
                "願孩子們永遠純真快樂！",
                "祝小朋友們節日愉快！",
                "願孩子們健康成長！",
                "祝福所有可愛的孩子！"
            ],
            business: [
                "祝所有小朋友兒童節快樂！",
                "願孩子們擁有美好的未來！",
                "祝願孩子們健康成長！",
                "願所有孩子快樂成長！",
                "祝小朋友們節日愉快！"
            ],
            humor: [
                "今天是你的節日，開心玩個夠！",
                "小朋友們，準備好收禮物了嗎？",
                "兒童節快樂，記得要聽話哦！",
                "祝你永遠是最可愛的寶貝！",
                "天天都是兒童節，永遠開心！"
            ]
        }
    },
    youth: {
        name: "青年節",
        date: () => {
            const now = new Date();
            const year = now.getFullYear();
            const youthDay = new Date(year, 2, 29); // 3月29日
            if (now > youthDay) {
                return new Date(year + 1, 2, 29);
            }
            return youthDay;
        },
        wishes: {
            family: [
                "祝青年們節日快樂！",
                "願年輕人前程似錦！",
                "祝願青年們夢想成真！",
                "願青春永駐，活力四射！",
                "祝願青年們前途光明！"
            ],
            friend: [
                "祝你青年節快樂，夢想成真！",
                "願你青春永駐，活力滿滿！",
                "祝你前程似錦，未來可期！",
                "願你充滿活力，勇往直前！",
                "祝你青春美好，夢想飛揚！"
            ],
            business: [
                "祝願年輕員工們節日快樂！",
                "願青年才俊們前程似錦！",
                "祝願年輕人事業有成！",
                "願年輕一代展翅高飛！",
                "祝願青年們成就非凡！"
            ],
            humor: [
                "青春就是要勇敢追夢！",
                "年輕就是本錢，好好揮霍！",
                "趁年輕，好好瘋狂一把！",
                "青春無敵，夢想起飛！",
                "年輕就是要放肆一點！"
            ]
        }
    },
    lover: {
        name: "情人節",
        date: () => {
            const now = new Date();
            const year = now.getFullYear();
            const valentineDay = new Date(year, 1, 14); // 2月14日
            if (now > valentineDay) {
                return new Date(year + 1, 1, 14);
            }
            return valentineDay;
        },
        wishes: {
            family: [
                "願我們的愛情永遠甜蜜！",
                "祝我們的感情天長地久！",
                "願我們的愛情歷久彌新！",
                "祝我們永遠幸福快樂！",
                "願我們的愛情永遠美好！"
            ],
            friend: [
                "祝你情人節快樂，甜蜜幸福！",
                "願你找到真愛，幸福美滿！",
                "祝你收穫甜蜜的愛情！",
                "願你的愛情美夢成真！",
                "祝你情人節浪漫溫馨！"
            ],
            business: [
                "祝願大家情人節快樂！",
                "願您佳節愉快，幸福美滿！",
                "祝願您收穫甜蜜愛情！",
                "願您擁有浪漫的一天！",
                "祝願您情人節愉快！"
            ],
            humor: [
                "單身也要過得開心！",
                "今天是秀恩愛的日子！",
                "沒有對象沒關係，自己愛自己！",
                "情人節快樂，記得要吃巧克力！",
                "今天是愛情的狂歡節！"
            ]
        }
    },
    birthday: {
        name: "生日",
        date: () => {
            // 生日沒有固定日期，返回當前日期
            return new Date();
        },
        wishes: {
            family: [
                "祝你生日快樂，幸福美滿！",
                "願你健康長壽，快樂永遠！",
                "祝你生日愉快，心想事成！",
                "願你青春永駐，幸福安康！",
                "祝你生日快樂，萬事如意！"
            ],
            friend: [
                "祝你生日快樂，開心每一天！",
                "願你夢想成真，前程似錦！",
                "祝你生日愉快，好運連連！",
                "願你平安喜樂，幸福滿滿！",
                "祝你生日快樂，事事順心！"
            ],
            business: [
                "祝您生日快樂，事業有成！",
                "願您福如東海，壽比南山！",
                "祝您生日愉快，萬事如意！",
                "願您健康長壽，事業輝煌！",
                "祝您生日快樂，前程似錦！"
            ],
            humor: [
                "今天是你的主場，盡情放閃！",
                "生日快樂，記得要請客哦！",
                "祝你年年都十八歲！",
                "生日快樂，許個美好的願望！",
                "今天你最大，想怎樣就怎樣！"
            ]
        }
    },
    dragon: {
        name: "端午節",
        date: () => {
            const now = new Date();
            const dragonFestival = new Date(2024, 5, 10); // 2024年6月10日
            if (now > dragonFestival) {
                return new Date(2025, 5, 28); // 2025年端午節
            }
            return dragonFestival;
        },
        wishes: {
            family: [
                "祝願全家端午安康，幸福美滿！",
                "願家人平安喜樂，身體健康！",
                "祝願闔家歡樂，端午佳節愉快！",
                "願我們的家庭和樂融融，幸福安康！",
                "祝願家人端午節快樂，身體健康！"
            ],
            friend: [
                "祝你端午節快樂，開心如意！",
                "願你佳節愉快，好運連連！",
                "祝你端午安康，事事順心！",
                "願你平安喜樂，幸福滿滿！",
                "祝你端午佳節快樂，萬事如意！"
            ],
            business: [
                "祝願貴公司端午節愉快，業務蒸蒸日上！",
                "願我們的合作更上一層樓！",
                "祝願您端午安康，生意興隆！",
                "願您佳節愉快，事業有成！",
                "祝願您端午節快樂，財源廣進！"
            ],
            humor: [
                "粽子要吃，快樂要記！",
                "端午安康，薪水暴漲！",
                "祝你粽子吃不完，開心笑不停！",
                "願你端午節快樂，煩惱都趕跑！",
                "粽子甜，心也甜，祝你端午節笑開顏！"
            ]
        }
    },
    moon: {
        name: "中秋節",
        date: () => {
            const now = new Date();
            const moonFestival = new Date(2024, 8, 17); // 2024年9月17日
            if (now > moonFestival) {
                return new Date(2025, 9, 6); // 2025年中秋節
            }
            return moonFestival;
        },
        wishes: {
            family: [
                "願全家團圓美滿，中秋快樂！",
                "祝願家人身體健康，幸福安康！",
                "願我們的家庭和樂融融，中秋愉快！",
                "祝願闔家歡樂，月圓人圓！",
                "願家人平安喜樂，中秋佳節快樂！"
            ],
            friend: [
                "祝你中秋節快樂，月圓人圓！",
                "願你佳節愉快，好運連連！",
                "祝你中秋快樂，事事圓滿！",
                "願你平安喜樂，幸福美滿！",
                "祝你中秋佳節愉快，心想事成！"
            ],
            business: [
                "祝願貴公司中秋節愉快，業務蒸蒸日上！",
                "願我們的合作更上一層樓！",
                "祝願您中秋快樂，生意興隆！",
                "願您佳節愉快，事業有成！",
                "祝願您中秋節快樂，財源廣進！"
            ],
            humor: [
                "月餅要吃，開心要記！",
                "中秋快樂，薪水暴漲！",
                "祝你月餅吃不完，開心笑不停！",
                "願你中秋節快樂，煩惱都趕跑！",
                "月餅甜，心也甜，祝你中秋笑開顏！"
            ]
        }
    },
    christmas: {
        name: "聖誕節",
        date: () => {
            const now = new Date();
            const christmas = new Date(now.getFullYear(), 11, 25);
            if (now > christmas) {
                return new Date(now.getFullYear() + 1, 11, 25);
            }
            return christmas;
        },
        wishes: {
            family: [
                "願全家聖誕快樂，幸福美滿！",
                "祝願家人平安喜樂，聖誕愉快！",
                "願我們的家庭充滿歡笑與祝福！",
                "祝願闔家歡樂，聖誕佳節愉快！",
                "願家人健康平安，聖誕節快樂！"
            ],
            friend: [
                "祝你聖誕節快樂，心想事成！",
                "願你佳節愉快，好運連連！",
                "祝你聖誕快樂，幸福滿滿！",
                "願你平安喜樂，夢想成真！",
                "祝你聖誕佳節愉快，萬事如意！"
            ],
            business: [
                "祝願貴公司聖誕節愉快，業務蒸蒸日上！",
                "願我們的合作更上一層樓！",
                "祝願您聖誕快樂，生意興隆！",
                "願您佳節愉快，事業有成！",
                "祝願您聖誕節快樂，財源廣進！"
            ],
            humor: [
                "聖誕老人說，你的禮物是一整年的幸福！",
                "祝你聖誕快樂，薪水暴漲！",
                "願你收到的禮物比煩惱還多！",
                "聖誕老人說你是最乖的寶寶！",
                "祝你聖誕節快樂，笑聲不斷！"
            ]
        }
    },
    newyear: {
        name: "元旦",
        date: () => {
            const now = new Date();
            const newYear = new Date(now.getFullYear() + 1, 0, 1);
            return newYear;
        },
        wishes: {
            family: [
                "願全家元旦快樂，幸福美滿！",
                "祝願家人新年快樂，身體健康！",
                "願我們的家庭在新的一年裡充滿歡笑！",
                "祝願闔家歡樂，新年愉快！",
                "願家人平安喜樂，新年快樂！"
            ],
            friend: [
                "祝你元旦快樂，心想事成！",
                "願你新年愉快，好運連連！",
                "祝你新年快樂，幸福滿滿！",
                "願你平安喜樂，夢想成真！",
                "祝你新年佳節愉快，萬事如意！"
            ],
            business: [
                "祝願貴公司新年愉快，業務蒸蒸日上！",
                "願我們的合作更上一層樓！",
                "祝願您新年快樂，生意興隆！",
                "願您佳節愉快，事業有成！",
                "祝願您新年快樂，財源廣進！"
            ],
            humor: [
                "新的一年，祝你薪水暴漲！",
                "願你新年快樂，煩惱都趕跑！",
                "祝你新的一年笑聲不斷！",
                "願你新年愉快，幸福滿滿！",
                "新年新希望，祝你樂開懷！"
            ]
        }
    },
    mother: {
        name: "母親節",
        date: () => {
            const now = new Date();
            const year = now.getFullYear();
            // 母親節是五月的第二個星期日
            let motherDay = new Date(year, 4, 1);
            while (motherDay.getDay() !== 0) {
                motherDay.setDate(motherDay.getDate() + 1);
            }
            motherDay.setDate(motherDay.getDate() + 7);
            if (now > motherDay) {
                // 計算明年的母親節
                motherDay = new Date(year + 1, 4, 1);
                while (motherDay.getDay() !== 0) {
                    motherDay.setDate(motherDay.getDate() + 1);
                }
                motherDay.setDate(motherDay.getDate() + 7);
            }
            return motherDay;
        },
        wishes: {
            family: [
                "祝天下所有的母親節日快樂！",
                "願媽媽永遠健康美麗，幸福快樂！",
                "感謝媽媽的養育之恩，母親節快樂！",
                "祝最親愛的媽媽節日愉快！",
                "願媽媽每一天都幸福安康！"
            ],
            friend: [
                "祝你的媽媽母親節快樂！",
                "願你和媽媽永遠幸福美滿！",
                "祝所有的媽媽節日愉快！",
                "願天下母親都幸福安康！",
                "祝福所有偉大的母親！"
            ],
            business: [
                "祝貴公司所有媽媽們母親節快樂！",
                "願所有職場媽媽幸福美滿！",
                "祝願各位媽媽節日愉快！",
                "感恩所有偉大的母親！",
                "祝所有的母親節日快樂！"
            ],
            humor: [
                "媽媽最棒，天下第一！",
                "老媽辛苦了，繼續加油！",
                "媽媽您最美，永遠18歲！",
                "感謝媽媽的愛，比珍珠還珍貴！",
                "媽媽是超人，永遠愛您！"
            ]
        }
    },
    father: {
        name: "父親節",
        date: () => {
            const now = new Date();
            const year = now.getFullYear();
            // 父親節是八月的第一個星期日
            let fatherDay = new Date(year, 7, 1);
            while (fatherDay.getDay() !== 0) {
                fatherDay.setDate(fatherDay.getDate() + 1);
            }
            if (now > fatherDay) {
                // 計算明年的父親節
                fatherDay = new Date(year + 1, 7, 1);
                while (fatherDay.getDay() !== 0) {
                    fatherDay.setDate(fatherDay.getDate() + 1);
                }
            }
            return fatherDay;
        },
        wishes: {
            family: [
                "祝天下所有的父親節日快樂！",
                "願爸爸永遠健康幸福，快樂安康！",
                "感謝爸爸的養育之恩，父親節快樂！",
                "祝最親愛的爸爸節日愉快！",
                "願爸爸每一天都幸福安康！"
            ],
            friend: [
                "祝你的爸爸父親節快樂！",
                "願你和爸爸永遠幸福美滿！",
                "祝所有的爸爸節日愉快！",
                "願天下父親都幸福安康！",
                "祝福所有偉大的父親！"
            ],
            business: [
                "祝貴公司所有爸爸們父親節快樂！",
                "願所有職場爸爸幸福美滿！",
                "祝願各位爸爸節日愉快！",
                "感恩所有偉大的父親！",
                "祝所有的父親節日快樂！"
            ],
            humor: [
                "爸爸最棒，天下第一！",
                "老爸辛苦了，繼續加油！",
                "爸爸您最帥，永遠年輕！",
                "感謝爸爸的愛，比金子還珍貴！",
                "爸爸是超人，永遠愛您！"
            ]
        }
    },
    teacher: {
        name: "教師節",
        date: () => {
            const now = new Date();
            const year = now.getFullYear();
            const teacherDay = new Date(year, 8, 28); // 9月28日
            if (now > teacherDay) {
                return new Date(year + 1, 8, 28);
            }
            return teacherDay;
        },
        wishes: {
            family: [
                "祝所有教師節日快樂！",
                "願老師們永遠健康幸福！",
                "感謝老師的教導之恩！",
                "祝最敬愛的老師節日愉快！",
                "願老師們桃李滿天下！"
            ],
            friend: [
                "祝你的老師教師節快樂！",
                "願所有老師幸福美滿！",
                "祝天下師長節日愉快！",
                "願所有教師都幸福安康！",
                "祝福所有偉大的老師！"
            ],
            business: [
                "祝貴校所有老師教師節快樂！",
                "願所有教育工作者幸福美滿！",
                "祝願各位老師節日愉快！",
                "感恩所有偉大的教師！",
                "祝所有的老師節日快樂！"
            ],
            humor: [
                "老師最棒，桃李滿天下！",
                "老師辛苦了，繼續培育英才！",
                "謝謝老師的教導，您最棒！",
                "感謝老師的愛，永遠懷念！",
                "老師是燈塔，照亮我們的未來！"
            ]
        }
    }
};

// 節日圖示映射
const festivalIcons = {
    spring: ['🏮', '💮', '🎊', '🧧', '🎋'],
    lantern: ['🏮', '🎆', '🎇', '✨', '💫'],
    qingming: ['🌿', '🌸', '🍃', '🌺', '🌱'],
    labor: ['👷', '🔧', '⚒️', '🛠️', '🔨'],
    dragon: ['🛶', '🐉', '🎋', '🍜', '🎭'],
    ghost: ['👻', '🏮', '💫', '🌙', '⭐'],
    moon: ['🌕', '🌝', '🥮', '🎑', '🏮'],
    double: ['🍊', '🍁', '🍂', '🌺', '🎋'],
    halloween: ['🎃', '👻', '🦇', '🕷️', '🕸️'],
    christmas: ['🎄', '🎅', '🎁', '⛄', '🔔'],
    newyear: ['🎉', '🎊', '🎆', '🎇', '✨'],
    mother: ['💐', '🌹', '💝', '💕', '👩'],
    father: ['👔', '👨', '💪', '❤️', '🎣'],
    children: ['🎈', '🎠', '🎪', '🎮', '🎨'],
    youth: ['💪', '🎓', '📚', '🎯', '🌟'],
    lover: ['💝', '💘', '💖', '🌹', '💑'],
    teacher: ['📚', '✏️', '🎓', '📖', '🍎'],
    birthday: ['🎂', '🎁', '🎈', '🎉', '🎊']
};

// DOM 元素
const generateBtn = document.getElementById('generateBtn');
const wishDisplay = document.getElementById('wishDisplay');
const copyNotification = document.getElementById('copyNotification');
const clickSound = document.getElementById('clickSound');
const categoryTags = document.querySelectorAll('.tag');
const countdownElement = document.getElementById('countdown');
const festivalSelect = document.getElementById('festivalSelect');

// 當前選擇的類別和節日
let currentCategory = 'family';
let currentFestival = 'spring';

// 星期幾的中文表示
const weekDays = ['日', '一', '二', '三', '四', '五', '六'];

// 將西元年轉換為民國年
function toTaiwanYear(date) {
    return date.getFullYear() - 1911;
}

// 格式化日期為民國年格式
function formatTaiwanDate(date) {
    const taiwanYear = toTaiwanYear(date);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const weekDay = weekDays[date.getDay()];
    
    return `民國${taiwanYear}年${month}月${day}日 星期${weekDay}`;
}

// 更新倒計時
function updateCountdown() {
    const festival = festivals[currentFestival];
    const festivalDate = festival.date();
    const now = new Date();
    const diff = festivalDate - now;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const formattedDate = formatTaiwanDate(festivalDate);
    countdownElement.querySelector('span').textContent = `${festival.name}是${formattedDate}，還有 ${days} 天`;
}

// 創建浮動圖示
function createFloatingIcon(icon) {
    const iconElement = document.createElement('div');
    iconElement.className = 'floating-icon';
    iconElement.textContent = icon;
    iconElement.style.left = Math.random() * 100 + 'vw';
    iconElement.style.animationDuration = (10 + Math.random() * 10) + 's';
    
    const floatingIcons = document.getElementById('floatingIcons');
    floatingIcons.appendChild(iconElement);
    
    // 動畫結束後移除元素
    iconElement.addEventListener('animationend', () => {
        iconElement.remove();
    });
}

// 定期添加浮動圖示
function addFloatingIcons() {
    const currentIcons = festivalIcons[currentFestival] || festivalIcons.spring;
    const randomIcon = currentIcons[Math.floor(Math.random() * currentIcons.length)];
    createFloatingIcon(randomIcon);
}

// 每2秒添加一個新的浮動圖示
setInterval(addFloatingIcons, 2000);

// 生成隨機祝福語
function generateWish() {
    const festival = festivals[currentFestival];
    const categoryWishes = festival.wishes[currentCategory];
    const randomIndex = Math.floor(Math.random() * categoryWishes.length);
    return categoryWishes[randomIndex];
}

// 播放音效
function playSound() {
    clickSound.currentTime = 0;
    clickSound.play().catch(error => console.log('播放音效失敗:', error));
}

// 顯示複製成功提示
function showCopyNotification() {
    copyNotification.classList.add('show');
    setTimeout(() => {
        copyNotification.classList.remove('show');
    }, 2000);
}

// 複製文字到剪貼板
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        showCopyNotification();
    } catch (err) {
        console.error('複製失敗:', err);
    }
}

// 生成按鈕點擊事件
generateBtn.addEventListener('click', () => {
    playSound();
    generateBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        generateBtn.style.transform = 'scale(1)';
    }, 100);
    
    const wish = generateWish();
    wishDisplay.style.opacity = '0';
    setTimeout(() => {
        wishDisplay.textContent = wish;
        wishDisplay.style.opacity = '1';
    }, 300);
});

// 文案展示框點擊事件
wishDisplay.addEventListener('click', () => {
    if (wishDisplay.textContent !== '請選擇節日並點擊生成按鈕...') {
        copyToClipboard(wishDisplay.textContent);
    }
});

// 分類標籤點擊事件
categoryTags.forEach(tag => {
    tag.addEventListener('click', () => {
        // 移除所有標籤的active類
        categoryTags.forEach(t => t.classList.remove('active'));
        // 添加當前標籤的active類
        tag.classList.add('active');
        // 更新當前類別
        currentCategory = tag.dataset.category;
    });
});

// 更新頁面背景
function updateBackground(festival) {
    // 移除所有節日相關的 class
    document.body.classList.remove('spring', 'dragon', 'moon', 'christmas', 'newyear', 'mother', 'father', 'teacher');
    // 添加當前節日的 class
    document.body.classList.add(festival);
}

// 節日選擇事件
festivalSelect.addEventListener('change', (e) => {
    currentFestival = e.target.value;
    updateCountdown();
    updateBackground(currentFestival);
    wishDisplay.textContent = '請選擇節日並點擊生成按鈕...';
    
    // 清除所有現有的浮動圖示
    document.getElementById('floatingIcons').innerHTML = '';
});

// 初始化背景
updateBackground('spring'); 