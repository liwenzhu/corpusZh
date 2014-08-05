CorpusZH
===

一个中文的标注语料库。可用于训练HMM模型。

## 词性标注代码

		n   普通名词
		nt  时间名词
		nd  方位名词
		nl  处所名词
		nh  人名
		nhf 姓
		nhs 名
		ns  地名
		nn  族名
		ni  机构名
		nz  其他专名
		v   动词
		vd  趋向动词
		vl  联系动词
		vu  能愿动词
		a   形容词
		f   区别词
		m   数词　　
		q   量词
		d   副词
		r   代词
		p   介词
		c   连词
		u   助词
		e   叹词
		o   拟声词
		i   习用语
		j   缩略语
		h   前接成分
		k   后接成分
		g   语素字
		x   非语素字
		w   标点符号
		ws  非汉字字符串
		wu  其他未知的符号

### 合并所有语料库

```
$ node combineAll.js
```

执行之后会得到一个合并所有语料并格式化的语料库 all.txt。