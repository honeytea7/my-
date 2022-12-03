# flex
flex的默认值为flex:0 1 auto。flex:1相当于设置了flex:1 1 auto。flex-grow属性为1，
flex 1=1 1 auto grow扩大 shrink缩小 basis
本链接详细讲述，好好学琪琪子已看完

https://blog.csdn.net/weixin_43554584/article/details/113839778?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522166981025516782425153119%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=166981025516782425153119&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_positive~default-1-113839778-null-null.142^v67^js_top,201^v3^control_1,213^v2^t3_control2&utm_term=flex%3A1&spm=1018.2226.3001.4187
## flex-grow 扩大
flex-grow属性指定了flex容器中剩余空间的多少应该被分配给项目。flex-grow设置的值为扩张因子，默认为0，剩余空间将会按照这个权重分别分配给子元素项目。

例如：父元素的宽度为500px，其中有两个元素A和B，A的宽度为100px，B的宽度为150px。假如不设置flex-grow属性，那么父元素的剩余宽度为500-(100+150)=250px。
假如A、B元素分别设置flex-grow的权重为a、b，那么A、B元素分别得到的剩余空间为250 * a/(a+b)、250 * b/(a+b)。

例：设置A的flex-grow为2，B的flex-grow为3，那么A元素的总宽度为100+250 * 2/(2+3)=200px，B元素的总宽度为150+250 * 3/(2+3)=300px。

## flex-shrink
flex-shrink属性指定了flex元素的收缩规则。flex元素仅在默认宽度之和大于容器的时候才会发生收缩。默认属性值为1，所以在空间不够的时候，子项目将会自动缩小。

假如父元素的宽度为500px，子元素A、B的宽度分别为250px，350px，超出容器宽度为(350+250)-500=100px。flex-shrink的计算公式为：超出宽度 * （当前元素宽度 * 其flex-shrink属性值/（每个元素的flex-shrink值 * 其宽度））。
在下面例子中，由于默认flex-shrink为1，那么A的缩小宽度为100 * (250 * 1/(250 * 1+350 * 1)≈41.66px，B的缩小宽度为100 * (350 * 1/(250 * 1+350 * 1)≈58.33px。A的最终宽度为250-41.66=208.34px，B的最终宽度为350-58.33=291.66px。
# flex-basis 
flex-basis属性指定了flex元素在主轴方向上的初始大小。如果不使用box-sizing改变盒模型的话，那么这个属性就决定了flex元素的内容的尺寸。如果设置了flex-basis值，那么元素占用的空间为flex-basis值；如果没有设置或者设置为auto，那么元素占据的空间为元素的width/height值。

例：A元素设置了width为250px，同时设置了flex-basis为300px，那么A元素占据的空间为300px。B元素没有设置flex-basis，占据的空间为350px。
