// Roll20 API Script: Sincronizacao de atributos entre ficha e token
// Atualize este arquivo para adicionar novas funcionalidades!

on('change:attribute', function(attr) {
    // IDs dos atributos que queremos sincronizar
    var syncAttrs = ['pv_atual', 'pv_max', 'mp_atual', 'mp_max'];
    if (syncAttrs.indexOf(attr.get('name')) !== -1) {
        var charId = attr.get('characterid');
        // Encontra todos os tokens que representam essa ficha
        var tokens = findObjs({ type: 'graphic', represents: charId });
        tokens.forEach(function(token) {
            // Sincroniza PV e MP nas barras do token
            if (attr.get('name') === 'pv_atual') token.set('bar1_value', attr.get('current'));
            if (attr.get('name') === 'pv_max') token.set('bar1_max', attr.get('current'));
            if (attr.get('name') === 'mp_atual') token.set('bar2_value', attr.get('current'));
            if (attr.get('name') === 'mp_max') token.set('bar2_max', attr.get('current'));
        });
    }
});

// Adicione novas funcoes abaixo conforme necessario!
