{
                    evt.initEvent("change", false, true);
                    menu['MaterialMenu'].hide();
                    input.dispatchEvent(evt);
                } else {
                    input.fireEvent("onchange");
                }
            }

            var hideAllMenus = function () {
                opened = false;
                input.value = previousValue;
                hiddenInput.value = previousDataVal;
                if (!dropdown.querySelector('.mdl-menu__container').classList.contains('is-visible')) {
                    dropdown.classList.remove('is-focused');
                }
                var menus = document.querySelectorAll('.getmdl-select .mdl-js-menu');
                [].forEach.call(menus, function (menu) {
                    menu['MaterialMenu'].hide();
                });
                var event = new Event('closeSelect');
                menu.dispatchEvent(event);
            };
            document.body.addEventListener('click', hideAllMenus, false);

            //hide previous select after press TAB
            dropdown.onkeydown = function (event) {
                if (event.keyCode == 9) {
                    input.value = previousValue;
                    hiddenInput.value = previousDataVal;
                    menu['MaterialMenu'].hide();
                    dropdown.classList.remove('is-focused');
                }
            };

            //show select if it have focus
            input.onfocus = function (e) {
                menu['MaterialMenu'].show();
                menu.focus();
                opened = true;
            };

            input.onblur = function (e) {
                e.stopPropagation();
            };

            //hide all old opened selects and opening just clicked select
            input.onclick = function (e) {
                e.stopPropagation();
                if (!menu.classList.contains('is-visible')) {
                    menu['MaterialMenu'].show();
                    hideAllMenus();
                    dropdown.classList.add('is-focused');
                    opened = true;
                } else {
                    menu['MaterialMenu'].hide();
                    opened = false;
                }
            };

            input.onkeydown = function (event) {
                if (event.keyCode == 27) {
                    input.value = previousValue;
                    hiddenInput.value = previousDataVal;
                    menu['MaterialMenu'].hide();
                    dropdown.MaterialTextfield.onBlur_();
                    if (label !== '') {
                        dropdown.querySelector('.mdl-textfield__label').textContent = label;
                        label = '';
                    }
                }
            };

            menu.addEventListener('closeSelect', function (e) {
                input.value = previousValue;
                hiddenInput.value = previousDataVal;
                dropdown.classList.remove('is-focused');
                if (label !== '') {
                    dropdown.querySelector('.mdl-textfield__label').textContent = label;
