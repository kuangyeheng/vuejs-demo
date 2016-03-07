var vm_title = new Vue({
    el: 'title',
    data:{
        title:'vue实例'
    },
    methods:{
        setTitle: function (input) {
            this.title = input;

        }
    },
    watch:{
        title: {
            handler: function () {
                console.dir(arguments);
//                    alert('title设置成功');
            },
            deep:true
        }
    }
});


var vm_button = new Vue({
    el: '#button',
    methods:{
        setTitle: function () {
            vm_title.setTitle(vm_form.message);
        }
    }
});

var vm_form = new Vue({
    el: '#form',
    data:{
        message: ''
    }
});

