(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{310:function(r,t,v){"use strict";v.r(t);var e=v(28),_=Object(e.a)({},(function(){var r=this,t=r.$createElement,v=r._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[v("h1",{attrs:{id:"研究和项目"}},[r._v("研究和项目")]),r._v(" "),v("h2",{attrs:{id:"研究"}},[r._v("研究")]),r._v(" "),v("MarkdownCard",{attrs:{image:"/projects/OCGNN.png"}},[v("p",[v("a",{attrs:{href:"https://arxiv.org/abs/2002.09594",target:"_blank",rel:"noopener noreferrer"}},[v("strong",[r._v("基于图神经网络(GNN)的异常检测技术")]),v("OutboundLink")],1),r._v(" -- 国家自然基金支持")]),r._v(" "),v("p",[r._v("随着大数据时代的不断发展，越来越多的数据以图(Grpah)的形式来存储。例如电子商务中的用户和物品的购买和点评网络、社交网络、交通网络等等。这类场景具有数据量大、实时性高和关联性强等特点，一旦系统在某时刻发生异常，其造成的大量、瞬时、连锁的数据异常或系统故障可能会带来数亿级别的经济损失。过去的图算法都是基于图谱理论或图拉普拉斯矩阵，给业界的开发者带来了极高的学习成本。基于此，本研究将传统的简易的异常检测技术和图神经网络结合来进行图域的异常检测，其愿景是可以让业界的开发者在几乎没有图理论储备的情况下，完成图异常检测系统的开发和部署。")]),r._v(" "),v("p",[r._v("关键词：异常检测、图神经网络、无监督学习、图挖掘")])]),r._v(" "),v("MarkdownCard",{attrs:{image:"/projects/GNN-Drug.png"}},[v("p",[v("strong",[r._v("基于图神经网络(GNN)的药物发现技术")]),r._v(" （待发表）  -- 英特尔公司支持")]),r._v(" "),v("p",[r._v("药物开发是一个昂贵且耗时的过程，其需要测试数千种化合物以找出安全有效的药物。使用机器学习方法预测药物的反应物产物一直是业界的研究热点，然而大部分当前的机器学习模型仍然需要大量专家知识。其次，现有深度学习架构只能处理矩阵类型的数据（如图像文本语音），不太适合像分子这样的图拓扑数据(Grpah)。在本研究中，我们采用时下流行的图神经网络来自动化地提取分子特征。同时，为了解决数据集类别数量过大等问题，我们将标签平滑、AM-softmax等技术首次应用于图神经网络中。")]),r._v(" "),v("p",[r._v("关键词：药物发现、图神经网络、图挖掘")])]),r._v(" "),v("MarkdownCard",{attrs:{image:"/projects/advae.jpg"}},[v("p",[v("strong",[v("a",{attrs:{href:"https://www.sciencedirect.com/science/article/pii/S0950705119305283?via%3Dihub",target:"_blank",rel:"noopener noreferrer"}},[r._v("引入高斯异常先验知识的自对抗变分自动编码器"),v("OutboundLink")],1)]),r._v(" -- 国家自然基金支持")]),r._v(" "),v("p",[r._v("异常检测是一种从数据中发现异常的技术和研究领域。它可以被应用在比如网络入侵检测、金融欺诈检测、故障检测、医疗健康管理以及防爆安全检查等领域。最近流行使用变分自动编码器等深度生成模型作为异常检测的核心技术，而这类技术通常面临着针对性不强的问题：这些深度生成模型仅仅学习了训练集中提供的正常数据的概率分布，没有尝试去判别异常数据，这对异常检测任务来说缺乏直接的贡献。所以我们提出了“引入高斯异常先验知识的自对抗变分自动编码器”，它可以在隐空间中使用对抗训练的方式模拟异常样本的概率分布，从而将无监督异常检测问题转换为有监督问题。相比于传统变分自动编码器的异常检测技术，自对抗变分自动编码器实现了性能上的大幅度超越，在4个指标和5个数据集上进行了验证。")]),r._v(" "),v("p",[r._v("关键词：异常检测、深度生成模型、变分自动编码器、无监督学习")])]),r._v(" "),v("h2",{attrs:{id:"项目"}},[r._v("项目")]),r._v(" "),v("MarkdownCard",{attrs:{image:"/projects/KFBIO.png"}},[v("p",[v("strong",[r._v("基于无监督异常检测技术的宫颈癌切片诊断")]),r._v("  -- 英特尔公司支持")]),r._v(" "),v("p",[r._v("全世界每年有上亿人需要通过医学影像检测来排除、确诊和定位病灶，然而，医学影像分析师的水平和经验参差不齐，面对疑难杂症更是只有少部分优秀的专家才能完成确诊，这极大地造成了医疗资源的不公平。人们已经尝试使用机器学习的方法来检测病灶，然而，这种方式面临着数据获取困难、病患隐私泄漏还有漏诊问题。本项目中我们开发了宫颈癌切片的辅助诊断系统，采用无监督的图像异常检测技术，学习大量正常样本的高维概率分布，让机器模型建立对正常切片的认知和估计。一旦模型发现切片样本偏离正常分布就会及时警告医生，该模型可以提高确诊速度，降低漏诊率。")]),r._v(" "),v("p",[r._v("技术: "),v("em",[r._v("Pytorch、Python、OpenCV、C++")])])]),r._v(" "),v("MarkdownCard",{attrs:{image:"/projects/powergird.jpg"}},[v("p",[v("strong",[r._v("变电站巡检机器人的数据融合及诊断系统")]),r._v("  -- 中国南方电网公司支持")]),r._v(" "),v("p",[r._v("中国拥有世界上最大的电网系统，然而变电设备需要巨额的人力物力成本来确保其正常工作，使用人工巡检存在一些无法忽视的安全问题。虽然近年来变电站巡检机器人为电力巡检提供了帮助，但其后台的数据分析和处理流程依然不够智能化、自动化，依赖后台人员人工监控。为了解决以上问题，我们先规范化了机器人和后端服务器之间的数据收集和交互流程，再结合时序分析技术和异常检测算法，自动化地检测、定位和预报故障，此外还为电力巡检人员制作了简单易学的后端监控平台。")]),r._v(" "),v("p",[r._v("技术: "),v("em",[r._v("SQL、Flask、Python、C++、CLIPS")])])]),r._v(" "),v("MarkdownCard",{attrs:{image:"/projects/micro.png"}},[v("p",[v("strong",[r._v("智能盲文阅读器")]),r._v("  -- 大学生创业项目")]),r._v(" "),v("p",[r._v("我们致力于开发一个通用的智能盲文阅读器，包括PCB电路的设计，通信协议，触控单元，触摸信号处理的算法以及互联网资源的获取。我们的宗旨是帮助盲童“看”世界。产品原型已被成都Aurora有限公司商业化，它已在中国被授予两项专利。")]),r._v(" "),v("p",[r._v("这个项目赢得了全国大学生“互联网+”创新创业大赛省银奖，其前身项目赢得了微软创新杯2016全球学生科技竞赛（中国区）一等奖。")]),r._v(" "),v("p",[r._v("技术: "),v("em",[r._v("PCB设计, C语言, 嵌入式编程, Python")])])])],1)}),[],!1,null,null,null);t.default=_.exports}}]);