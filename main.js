// 图表初始化
function initCharts() {
    // 波形图表
    const waveChart = echarts.init(document.getElementById('waveChart'));
    const waveOption = {
        animation: false,
        grid: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            show: false,
            data: Array.from({length: 50}, (_, i) => i)
        },
        yAxis: {
            type: 'value',
            show: false
        },
        series: [{
            data: Array.from({length: 50}, () => Math.random() * 10 + 5),
            type: 'line',
            smooth: true,
            symbol: 'none',
            lineStyle: {
                color: 'rgba(87, 181, 231, 1)',
                width: 2
            },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: 'rgba(87, 181, 231, 0.3)'
                    }, {
                        offset: 1, color: 'rgba(87, 181, 231, 0.1)'
                    }]
                }
            }
        }]
    };
    waveChart.setOption(waveOption);

    // 挑战图表1
    const challengeChart1 = echarts.init(document.getElementById('challengeChart1'));
    const challenge1Option = {
        animation: false,
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            textStyle: {
                color: '#1f2937'
            }
        },
        grid: {
            top: 10,
            right: 10,
            bottom: 20,
            left: 50
        },
        xAxis: {
            type: 'category',
            data: ['Q1', 'Q2', 'Q3', 'Q4', 'Q1', 'Q2'],
            axisLabel: {
                color: '#1f2937'
            }
        },
        yAxis: {
            type: 'value',
            name: '检测难度',
            nameTextStyle: {
                color: '#1f2937'
            },
            axisLabel: {
                color: '#1f2937'
            }
        },
        series: [{
            data: [30, 42, 51, 64, 75, 85],
            type: 'line',
            smooth: true,
            lineStyle: {
                color: 'rgba(87, 181, 231, 1)'
            },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: 'rgba(87, 181, 231, 0.2)'
                    }, {
                        offset: 1, color: 'rgba(87, 181, 231, 0.05)'
                    }]
                }
            }
        }]
    };
    challengeChart1.setOption(challenge1Option);

    // 挑战图表2
    const challengeChart2 = echarts.init(document.getElementById('challengeChart2'));
    const challenge2Option = {
        animation: false,
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            textStyle: {
                color: '#1f2937'
            }
        },
        grid: {
            top: 10,
            right: 10,
            bottom: 20,
            left: 50
        },
        series: [{
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 8
            },
            label: {
                show: false
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '12',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 45, name: '对抗性样本', itemStyle: { color: 'rgba(87, 181, 231, 1)' } },
                { value: 30, name: '模糊指令', itemStyle: { color: 'rgba(141, 211, 199, 1)' } },
                { value: 15, name: '超声波攻击', itemStyle: { color: 'rgba(251, 191, 114, 1)' } },
                { value: 10, name: '其他', itemStyle: { color: 'rgba(252, 141, 98, 1)' } }
            ]
        }]
    };
    challengeChart2.setOption(challenge2Option);

    // 挑战图表3
    const challengeChart3 = echarts.init(document.getElementById('challengeChart3'));
    const challenge3Option = {
        animation: false,
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            textStyle: {
                color: '#1f2937'
            }
        },
        grid: {
            top: 10,
            right: 10,
            bottom: 20,
            left: 50
        },
        xAxis: {
            type: 'category',
            data: ['传统', '慧音执守'],
            axisLabel: {
                color: '#1f2937'
            }
        },
        yAxis: {
            type: 'value',
            name: '预测能力',
            nameTextStyle: {
                color: '#1f2937'
            },
            axisLabel: {
                color: '#1f2937'
            }
        },
        series: [{
            data: [35, 92],
            type: 'bar',
            barWidth: '40%',
            itemStyle: {
                color: function(params) {
                    return params.dataIndex === 0 ? 'rgba(252, 141, 98, 1)' : 'rgba(87, 181, 231, 1)';
                },
                borderRadius: 8
            }
        }]
    };
    challengeChart3.setOption(challenge3Option);

    // 行为分析图表
    const behaviorChart = echarts.init(document.getElementById('behaviorChart'));
    const behaviorOption = {
        animation: false,
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            textStyle: {
                color: '#1f2937'
            }
        },
        legend: {
            data: ['正常行为', '异常行为'],
            textStyle: {
                color: '#1f2937'
            }
        },
        grid: {
            top: 30,
            right: 10,
            bottom: 20,
            left: 50
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
            axisLabel: {
                color: '#1f2937'
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                color: '#1f2937'
            }
        },
        series: [
            {
                name: '正常行为',
                type: 'line',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                    color: 'rgba(87, 181, 231, 1)'
                },
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'rgba(87, 181, 231, 0.2)'
                        }, {
                            offset: 1, color: 'rgba(87, 181, 231, 0.05)'
                        }]
                    }
                },
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '异常行为',
                type: 'line',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                    color: 'rgba(252, 141, 98, 1)'
                },
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'rgba(252, 141, 98, 0.2)'
                        }, {
                            offset: 1, color: 'rgba(252, 141, 98, 0.05)'
                        }]
                    }
                },
                data: [5, 3, 8, 12, 6, 10, 4]
            }
        ]
    };
    behaviorChart.setOption(behaviorOption);

    // 窗口大小变化时重新调整图表大小
    window.addEventListener('resize', function() {
        waveChart.resize();
        challengeChart1.resize();
        challengeChart2.resize();
        challengeChart3.resize();
        behaviorChart.resize();
    });
}

// 导航栏滚动效果
function initNavbarScroll() {
    const navbar = document.querySelector('nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 10) {
            navbar.classList.add('shadow-md');
            navbar.classList.remove('shadow-sm');
        } else {
            navbar.classList.remove('shadow-md');
            navbar.classList.add('shadow-sm');
        }
    });
}

// 登录模态框功能
function initLoginModal() {
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const closeLoginModal = document.getElementById('closeLoginModal');
    const loginForm = document.getElementById('loginForm');

    function showModal() {
        loginModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    function hideModal() {
        loginModal.classList.add('hidden');
        document.body.style.overflow = '';
    }

    loginBtn.addEventListener('click', showModal);
    
    closeLoginModal.addEventListener('click', hideModal);
    
    loginModal.addEventListener('click', function(e) {
        if (e.target === loginModal) {
            hideModal();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !loginModal.classList.contains('hidden')) {
            hideModal();
        }
    });

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const remember = document.getElementById('remember').checked;
        
        // 模拟登录验证 - 任何输入都视为成功
        if (email && password) {
            // 显示成功提示
            showSuccessMessage('登录成功！正在跳转...');
            hideModal();
            
            // 1.5秒后跳转到dashboard.html
            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 1500);
        }
    });
    
    function showSuccessMessage(message) {
        // 创建成功提示
        const successDiv = document.createElement('div');
        successDiv.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-[60] flex items-center space-x-2';
        successDiv.innerHTML = `
            <i class="ri-check-circle-line"></i>
            <span>${message}</span>
        `;
        document.body.appendChild(successDiv);
        
        // 3秒后自动移除
        setTimeout(() => {
            if (successDiv.parentNode) {
                successDiv.parentNode.removeChild(successDiv);
            }
        }, 3000);
    }
}

// 平滑滚动功能
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 页面加载完成后初始化所有功能
document.addEventListener('DOMContentLoaded', function() {
    initCharts();
    initNavbarScroll();
    initLoginModal();
    initSmoothScroll();
}); 